// Loading Common Element Using External File
$("#header").load("header.html");
$("#footer").load("footer.html");


// AOS Js (Reveal Animation)
AOS.init();

// Function to handle loading content based on page value
function loadContent(page) {
  // List of valid page values
  var validPages = ['home', 'about', 'project', 'service', 'career', 'contact'];

  // Check if the extracted page value is valid
  if (!page) {
    // If there is no value after '#', load the home.html page by default
    $('main').load('home.html');
  } else if (validPages.includes(page)) {
    // If the page value is valid, load corresponding HTML content into the main tag
    $('main').load(page + '.html');
  } else {
    // If the page value is not valid, load the 404.html page
    $('main').load('404.html');
  }
}

$(document).ready(function() {
  // Handle click event for nav-links
  $('.nav-link').on('click', function(e) {
    // e.preventDefault();
    // Get the value after '#' from the href attribute
    var page = $(this).attr('href').substring(1);
    // Call the function to load content based on page value
    loadContent(page);
  });

  // Load content on window load
  var initialPage = window.location.hash.substring(1);
  loadContent(initialPage);
});
