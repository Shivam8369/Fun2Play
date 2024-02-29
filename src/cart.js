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

var userCoins = document.getElementById("coin-count").textContent;
console.log(userCoins);