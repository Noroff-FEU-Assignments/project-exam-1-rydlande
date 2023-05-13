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
// const loader = document.getElementById("loading");

function displayLoading() {
  loader.classList.add("display");
  setTimeout(() => {
    
  loader.classList.remove("display");
  });
}

function hideLoading() {
  loader.classList.remove("display");
}

const main = document.querySelector("main");


// LOADER //




// MAIN //
const slider = document.getElementById("slider");
const url = "https://www.exam1.serialsnoozer.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia"

const getBlogs = () => {
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    renderBlogs(data)
  })
  // .catch((e) => {
  //   main.innerHTML = `Woops! Something went wrong... Please try again later.`
  //   console.log(e)
  // })
}

function renderBlogs(data) {
    slider.innerHTML = data.map((element, index, arr) => {  

    const {id, date, title, rendered, content, _embedded} = element;

   
    

    let media = _embedded["wp:featuredmedia"][0].source_url;
    return `
    <div class="sliderContainer">
    <a href="./blog_specific.html?id=${id}" class="sliderCard">
      <img src="${media}" alt="${element._embedded["wp:featuredmedia"][0].alt_text}" class="sliderImg" />
      <div class="sliderText">
        <h3 class="sliderH3">${title.rendered}</h3>
        <p class="sliderContent">start av innhold?</p>
      </div>
    </a>
</div>
<a class="btnNext" onclick="nextPost(-1)"><i class="fa-solid fa-angle-right fa-2xl" style="color: var(--main-bg-color);"></i></a>
    <a class="btnPrev" onclick="prevPost(1)"><i class="fa-solid fa-angle-left fa-2xl" style="color: var(--main-bg-color)"></i></a>

    
    `
  }).join("")
  console.log(data)

  loader.classList.remove("loading");

//   const carousel = document.getElementById("carousel");

//   window.onload = function () {
//     if (carousel.length) {
//       carousel.forEach((carousel) => {
//         const slideContainer = carousel.querySelector(".sliderContainer");
//         const slides = carousel.querySelectorAll(".sliderCard");

//         const slideContainerWidth = slideContainer.offsetWidth;
//         const scrollIncrement = slideContainerWidth / slides.length;

//         const previousBtn = document.getElementById("precious");
//         const forwardsBtn = document.getElementById("forwards");


//         forwardsBtn.addEventListener("click", () => {
//           slideContainer.scrollBy(scrollIncrement, 0);
//         });

//         previousBtn.addEventListener("click", () => {
//           slideContainer.scrollBy(scrollIncrement * -1, 0);
//         });
//       });
//     }

// }

}

getBlogs()