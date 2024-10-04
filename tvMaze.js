// const form = document.querySelector("#search-form");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   document.querySelectorAll("img").forEach((img) => img.remove());

//   const keyword = form.elements.query.value;
//   const config = {
//     params: { q: keyword, embed: "episodes", imdb: "tt0944947" },
//   };
//   const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
//   //   console.log(res.data);
//   getImages(res.data);
//   form.elements.query.value = "";
// });

// const getImages = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("img");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };
