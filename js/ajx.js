const testimonialPromise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.npoint.io/24450ea5609b5adb9ac5", true);

  xhr.onload = function () {
    // 200 : ok
    // 404 : not found
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error loading data!");
    }
  };
  xhr.onerror = function () {
    reject("Network Error!");
  };
  xhr.send();
});

async function getAllTestimonials() {
  const response = await testimonialPromise;
  console.log(response);

  let testimonialHTML = "";
  response.forEach((z) => {
    testimonialHTML += `<div class="testimonial">
                     <img src="${z.image}" class="profile-testimonial" />
                     <p class="quote">"${z.quote}"</p>
                     <p class="author">- ${z.author}</p>
                     <p class="author">${z.rating} <i class="fa-solid fa-star" style="color: goldenrod"></i></p>
                 </div>`;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

getAllTestimonials();

async function getFilteredTestimonials(rating) {
  const responseFilter = await testimonialPromise;

  let testimonialHTML = "";

  const testimonialFiltered = responseFilter.filter((item) => {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h1> Data not found! </h1>`;
  } else {
    testimonialFiltered.forEach((z) => {
      testimonialHTML += `<div class="testimonial">
                <img src="${z.image}" class="profile-testimonial" />
                <p class="quote">"${z.quote}"</p>
                <p class="author">- ${z.author}</p>
                <p class="rating">${z.rating} <i class="fa-solid fa-star" style="color: goldenrod"></i></p>
            </div>`;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}
