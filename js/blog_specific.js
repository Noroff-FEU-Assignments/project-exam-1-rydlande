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







// MAIN //
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const main = document.querySelector("main");
const head = document.querySelector("head");
const id = params.get("id");

const url = `https://www.exam1.serialsnoozer.no/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia`;

  // fetch(url)
  //   .then(res => res.json())
  //   .then((data) => {
  //     console.log(data)
  //   });


  const getBlogs = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)

        const {id, date, title, rendered, content} = data;
        const media = data._embedded["wp:featuredmedia"][0].source_url;
        const d = new Date(date).toLocaleDateString('en-EU', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });


        // BLOG TITLE TO HEAD
        const BlogTitle = document.createElement("title");
        BlogTitle.innerHTML = `SerialSnoozer | ` + title.rendered;
        head.appendChild(BlogTitle);


        // BLOG CONTENT
        main.innerHTML = `<div>
        <div class="featuredImg">
          <img src="${media}" alt="" class="imgfitPage">
        </div>
        <div class="blogContent">
          <h2 class="blogTitle">${title.rendered}</h2>
          <div class="blogText">
          <p class="published">${d}</p>
          <p>${content.rendered}</p>
          </div>
        </div>
      </div>`
      })

      .catch((e) => {
        main.innerHTML = `Woops! Something went wrong... Please try again later.`
        console.log(e)
    })
  }

  getBlogs();
// MAIN //