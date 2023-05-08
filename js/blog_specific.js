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



// FETCH ID //
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const url = `https://www.exam1.serialsnoozer.no/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia`;

fetch(url)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
})
// FETCH ID //



// CARD // 