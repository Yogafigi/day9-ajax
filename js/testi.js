// const testimonialData = [
//   {
//     author: "Mesut ozil",
//     quote:
//       "Akan ada kendala. Akan ada orang yang ragu. Akan ada kesalahan. Tapi dengan kerja keras, tidak ada batasan.",
//     image:
//       "https://cdn.idntimes.com/content-images/community/2020/05/mesutoziloezilarsenalvchelseapremier5sj6wdav1h0l-a659a8a1c4f09123a6857ee7b5fa6014_600x400.jpg",
//     rating: 5,
//   },
//   {
//     author: "Mbape",
//     quote: "hufttttt",
//     image:
//       "https://awsimages.detik.net.id/community/media/visual/2022/10/08/kylian-mbappe_169.jpeg?w=1200",
//     rating: 1,
//   },
//   {
//     author: "Fadli",
//     quote: "Dimana anda?",
//     image:
//       "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     rating: 3,
//   },
//   {
//     author: "Aji js",
//     quote: "Nama kamu siapa?",
//     image:
//       "https://media.istockphoto.com/id/1400280368/photo/happy-businessman-working-on-his-laptop-at-home-handsome-businessman-reading-an-email-on-his.jpg?b=1&s=170667a&w=0&k=20&c=mc9FiePkCPzKWRyexNf2lMo9BkDej_OpNloSDMNsutM=",
//     rating: 3,
//   },
//   {
//     author: "Abdul jabar",
//     quote: "Mari ngopi biar ga stress!",
//     image:
//       "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     rating: 4,
//   },
// ];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach((z) => {
    testimonialHTML += `<div class="testimonial">
                   <img src="${z.image}" class="profile-testimonial" />
                   <p class="quote">"${z.quote}"</p>
                   <p class="author">- ${z.author}</p>
                   <p class="author">${z.rating} <i class="fa-solid fa-star" style="color: goldenrod"></i></p>
               </div>`;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter((item) => {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h2> Data tidak ada! </h2>`;
  } else {
    testimonialFiltered.forEach((z) => {
      testimonialHTML += `<div class="testimonial">
              <img src="${z.image}" class="profile-testimonial" />
              <p class="quote">"${z.quote}"</p>
              <p class="author">- ${z.author}</p>
              <p class="rating">${z.rating} <i class="fa-solid fa-star" style="color: goldenrod;"></i></p>
          </div>`;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}
