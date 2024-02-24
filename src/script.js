// read more

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read more") {
    readMoreBtn.innerText = "Read less";
  } else {
    readMoreBtn.innerText = "Read more";
  }
});




// filter games
let list = document.querySelectorAll(".list");
let card = document.querySelectorAll(".card");

function filterCards(dataFilter) {
  card.forEach((c) => {
    c.classList.remove("active");
    c.classList.add("hide");

    const cardDataItem = c.getAttribute("data-item");
    if (cardDataItem === dataFilter || dataFilter === "All") {
      c.classList.remove("hide");
      c.classList.add("active");
    }
  });
}

// Function to handle click events on filter list items
function handleFilterClick(event) {
  list.forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");

  const dataFilter = event.target.getAttribute("data-filter");
  filterCards(dataFilter);
}
// Event listeners for filter list items
list.forEach((item) => item.addEventListener("click", handleFilterClick));





// responsive nav-bar
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const nav = document.querySelector(".nav");
  toggleMenu.classList.toggle("active");
  nav.classList.toggle("active");
}





// scrolling animation effect
window.addEventListener("scroll", function () {
  var anime = document.querySelectorAll(".animeX");

  for (var s = 0; s < anime.length; s++) {
    var windowHeight = window.innerHeight;
    var animeTop = anime[s].getBoundingClientRect().top;
    var animePoint = 150;

    if (animeTop < windowHeight - animePoint) {
      anime[s].classList.add("active");
    } else {
      anime[s].classList.remove("active");
    }
  }
});


// Export coinCountElement

  


