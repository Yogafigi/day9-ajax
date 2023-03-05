datas = [];

const getProject = (event) => {
  event.preventDefault();
  let projectName = document.getElementById("projectname").value;
  let startDate = document.getElementById("startdate").value;
  let endDate = document.getElementById("enddate").value;
  let description = document.getElementById("description").value;
  let img = document.getElementById("blog-img").files;

  let nodejs = document.getElementById("nodejs").checked;
  let nextjs = document.getElementById("nextjs").checked;
  let reactjs = document.getElementById("reactjs").checked;
  let typescript = document.getElementById("typescript").checked;

  let tesNodejs =
    nodejs == true
      ? `<img id="nodejs" src="assets/image/nodejs.png" alt="">`
      : "";
  let tesNextjs =
    nextjs == true
      ? `<img id="nextjs" src="assets/image/nextjs.png" alt="" >`
      : "";
  let tesReactjs =
    reactjs == true
      ? `<img id="reactjs" src="assets/image/reactjs.png" alt="">`
      : "";
  let tesTypescript =
    typescript == true
      ? `<img id="typescript" src="assets/image/typescript.png" alt="" >`
      : "";

  img = URL.createObjectURL(img[0]);

  if (projectName == "") {
    return alert("Name tidak Boleh Kosong");
  } else if (startDate == "") {
    return alert("Date harus ke isi");
  } else if (description == "") {
    return alert("Description tidak Boleh Kosong ");
  }

  let data = {
    projectName,
    startDate,
    endDate,
    description,
    img,
    tesNodejs,
    tesNextjs,
    tesReactjs,
    tesTypescript,
  };

  datas.push(data);
  console.log(datas);
  showData();
};

const showData = () => {
  document.getElementById("wrap-project").innerHTML = "";

  for (i = 0; i < datas.length; i++) {
    document.getElementById("wrap-project").innerHTML += `
        <div class="card-project">
          <a href="">
            <img
              src="${datas[i].img}"
              alt=""
              class="card-avatar"
            />
          </a>
          <h3>${datas[i].projectName}</h3>
          <p class="duration">${setDuration(
            datas[i].startDate,
            datas[i].endDate
          )}</p>
          <p>
            ${datas[i].description}
          </p>
          ${datas[i].tesNodejs}
          ${datas[i].tesReactjs}
          ${datas[i].tesNextjs}
          ${datas[i].tesTypescript}
          <div class="btn-card">
            <a href="#">edit</a>
            <a href="#">delete</a>
          </div>
        `;
  }
  alert("Sukses masukan data");
};

const setDuration = (start, end) => {
  const dateStart = new Date(start).getTime();
  const dateEnd = new Date(end).getTime();
  const selisih = dateEnd - dateStart;

  let day = selisih / (1000 * 3600 * 24);
  const month = Math.floor(selisih / (1000 * 24 * 3600 * 30));

  const result =
    day < 30
      ? day === 1
        ? `Duration : ${day} day`
        : `Duration : ${day} days`
      : month === 1
      ? `Duration : ${month} month`
      : `Duration : ${month} months`;

  console.log(result);
  return result;
};
