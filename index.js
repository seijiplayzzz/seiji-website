  // Get a reference to the button element by its ID
  const youtubeButton = document.getElementById("youtubeButton");

  // Define the function that will be executed when the button is clicked
  function redirectToYoutube() {
    // Replace the URL below with the correct YouTube URL you want to redirect to
    window.location.href = "https://www.youtube.com/@seijiplayzz";
  }

   // Attach the event listener to the button, so that the function is called when the button is clicked
  youtubeButton.addEventListener("click", redirectToYoutube);
  
  // second button
  
function redirectToFacebook() {
  window.location.href = 'https://www.facebook.com/koshiaintsimp.15?mibextid=ZbWKwL';
}

const facebookButton = document.getElementById('facebookButton');
facebookButton.addEventListener('click', redirectToFacebook);

  document.getElementById("openAppButton").addEventListener("click", function() {
    // Change the URL to your desired website
    window.location.href = "https://seijiplayzz.blogspot.com";
  });
  
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function performSearch() {
    
    const searchQuery = searchInput.value;

    const searchEndpoint = `https://www.you.com/search?query=${encodeURIComponent(searchQuery)}`;
    
    window.open(searchEndpoint, "_blank");
}

searchButton.addEventListener("click", performSearch);

searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

// Select the element with class "hamburger"
const hamburger = document.querySelector(".hamburger");

// Set a click event handler for the hamburger element
hamburger.onclick = function() {
  // Select the element with class "nav-bar"
  const navbar = document.querySelector(".nav-bar");

  // Toggle the "active" class on the navbar element
  navbar.classList.toggle("active");
};

