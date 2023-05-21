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

const overview = document.getElementById("overview");
const url = "https://www.exam1.serialsnoozer.no/wp-json/wp/v2/posts?per_page=15"
const delay = 2000;


const getBlogs = () => {
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    renderBlogs(data)
  })
}


function renderBlogs(data) {
  overview.innerHTML = data.map((element, index, arr) => {

    const {id, date, title, rendered, content, jetpack_featured_media_url} = element;

    const d = new Date(date).toLocaleDateString('en-EU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    console.log(d);
    loader.classList.remove("loading");         // Remove loader


    // let media = element._embedded["wp:featuredmedia"][0].source_url;
    return `
    <div class="blogsContainer">
    <a href="./blog_specific.html?id=${id}" class="card">
    <img class="imgfitPage" src="${jetpack_featured_media_url}" alt="Featured image: ${title.rendered}" />
    <div class="cardText">
      <h3>${title.rendered}</h3>
      <p class="published">${d}</p>
    </div>
  </a></div>`;
  

  }).join("")
  console.log(data)
}


getBlogs();





//////// NÆRMESTE JEG KOM I DAG 14.05.23

// const main = document.querySelector("main");
// const url = "https://www.exam1.serialsnoozer.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia"
// const delay = 2000;
// const cardContainer = document.querySelector("#container");
// const loadMoreButton = document.getElementById("load-more");
// const cardCountElem = document.getElementById("card-count");
// const cardTotalElem = document.getElementById("card-total");



// const getBlogs = () => {
//   fetch(url)
//   .then(res => res.json())
//   .then((data) => {
//     renderBlogs(data)
//   })
// }

// const cardLimit = 99;
//     const cardIncrease = 3;
//     const pageCount = Math.ceil(cardLimit / cardIncrease);
//     let currentPage = 1;
//     cardTotalElem.innerHTML = cardLimit;



//         const handleButtonStatus = () => {
//           if (pageCount === currentPage) {
//             loadMoreButton.classList.add("disabled");
//             loadMoreButton.setAttribute("disabled", true);
//           }
//         };

//         const card = document.createElement("div");
//         card.className = "card";


// function renderBlogs(data) {
//   card.innerHTML = data.map((element, index, arr) => {

//     const {id, date, title, rendered, content} = element;
//     const d = new Date(date).toLocaleDateString('en-EU', {
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric',
//     });
//     console.log(d);
//     loader.classList.remove("loading");         // Remove loader
    
  
//     const addCards = (pageIndex) => {
//       currentPage = pageIndex;
    
//       handleButtonStatus();
    
//       const startRange = (pageIndex - 1) * cardIncrease;
//       const endRange =
//         pageIndex * cardIncrease > cardLimit ? cardLimit : pageIndex * cardIncrease;
      
//       cardCountElem.innerHTML = endRange;
    
//       for (let i = startRange + 1; i <= endRange; i++) {
//         renderBlogs(data);
//       }
//     };


//     window.onload = function () {
//       addCards(currentPage);
//       loadMoreButton.addEventListener("click", () => {
//         addCards(currentPage + 1);
//       });
//     };

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
//   cardContainer.appendChild(card);
//   console.log(data)
// }


// getBlogs();

// MAIN //