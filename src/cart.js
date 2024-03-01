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

// function for purchase NFT
document.addEventListener("DOMContentLoaded", function () {

  var userCoins = parseInt(document.getElementById("coin-count").textContent);
  // Get all the download links
  var downloadLinks = document.querySelectorAll("a[download]");

  // Add click event listener to each download link
  downloadLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Get the associated coin value for the current download link
      var requiredCoins = parseInt(
        link.parentElement.querySelector("span[coin]").textContent
      );

      // Check if user has enough coins
      if (userCoins >= requiredCoins) {
        // Update the user's coin count
        userCoins -= requiredCoins;
        document.getElementById("coin-count").textContent = userCoins;
        link.textContent = "Sold-out";
        event.preventDefault();
        alert("You have successfully purchased this item.");
        
      } else {
        // Prevent the default download behavior
        event.preventDefault();
        alert("You don't have enough coins to Purchase this item.");
      }
    });
  });
});
