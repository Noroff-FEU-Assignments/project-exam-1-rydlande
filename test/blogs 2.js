// NAVBAR //
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
// NAVBAR //



// LOADER //
const loader = document.getElementById("loading");

function displayLoading() {
  loader.classList.add("display");
  setTimeout(() => {
  loader.classList.remove("display");
  });
}

function hideLoading() {
  loader.classList.remove("display");
}
// LOADER //




// MAIN //
const main = document.querySelector("main");
const h1 = document.getElementById("h1")
const url = `https://www.exam1.serialsnoozer.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia`
const delay = 2000;
let totalPages, currentPage = 0, loadMore = document.getElementById("");


const getBlogs = () => {
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    renderBlogs(data)
  })
}


function renderBlogs(data) {
  main.innerHTML = data.map((element, index, arr) => {

    h1.innerHTML = `All blogs`;

    const {id, date, title, rendered, content} = element;

    const d = new Date(date).toLocaleDateString('en-EU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    console.log(d);
    loader.classList.remove("loading");         // Remove loader


    let media = element._embedded["wp:featuredmedia"][0].source_url;
    return `
    <div class="container">
    <a href="./blog_specific.html?id=${id}" class="card">
    <img class="imgfitPage" src="${media}" alt="${element._embedded["wp:featuredmedia"][0].alt_text}" />
    <div class="cardText">
      <h3>${title.rendered}</h3>
      <p class="published">${d}</p>
    </div>
  </a></div>`;
  

  }).join("")
  console.log(data)
}


// setTimeout(() => {getBlogs()});
getBlogs();
// MAIN //


// const main = document.querySelector("main");
// const url = "https://www.exam1.serialsnoozer.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia"
// const delay = 2000;


// const getBlogs = () => {
//   fetch(url)
//   .then(res => res.json())
//   .then((data) => {
//     renderBlogs(data)
//   })
// }


// function renderBlogs(data) {
//   main.innerHTML = data.map((element, index, arr) => {

//     const {id, date, title, rendered, content} = element;

//     const d = new Date(date).toLocaleDateString('en-EU', {
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric',
//     });
//     console.log(d);
//     loader.classList.remove("loading");         // Remove loader


//     let media = element._embedded["wp:featuredmedia"][0].source_url;
//     return `
//     <div class="container">
//     <a href="./blog_specific.html?id=${id}" class="card">
//     <img class="imgfitPage" src="${media}" alt="${element._embedded["wp:featuredmedia"][0].alt_text}" />
//     <div class="cardText">
//       <h3>${title.rendered}</h3>
//       <p class="published">${d}</p>
//     </div>
//   </a></div>`;
  

//   }).join("")
//   console.log(data)
// }


// // setTimeout(() => {getBlogs()});
// getBlogs();
// // MAIN //