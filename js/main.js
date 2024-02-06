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
    $('main').load(page + '.html', initializeOtherJs);
  } else {
    // If the page value is not valid, load the 404.html page
    $('main').load('404.html');
  }
}
// Function to initialize the Slick slider
function initializeOtherJs() {
  $('.ht-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
  $('.t-arrow .fa-arrow-left').on('click', function () {
    $('.ht-container').slick('slickPrev');
  });

  $('.t-arrow .fa-arrow-right').on('click', function () {
    $('.ht-container').slick('slickNext');
  });

}
$(document).ready(function () {
  // Handle click event for nav-links

  $('a.page-load-link').on('click', function (e) {
    // e.preventDefault();
    // Get the value after '#' from the href attribute
    var page = $(this).attr('href').substring(1);
    // alert(page);
    // Call the function to load content based on page value
    loadContent(page);
  });

  // Load content on window load
  var initialPage = window.location.hash.substring(1);
  loadContent(initialPage);
});

$(document).ready(function () {
  // Handle mouseenter event for .service-box elements inside the main element
  $('main').on('mouseenter', '.service-box:nth-child(2)', function () {
    $(".service-box h4").css({ "font-weight": "400", 'color': '#fff' });
    $(this).find("h4").css("font-weight", "700");
    $(this).parent().parent().parent().parent().css('background', 'url(../image/service-1.jpg)');
    $(this).parent().find(".service-arrow").css({ 'transform': 'translate(270px, 13px)', 'color': '#fff' });
  });
  $('main').on('mouseenter', '.service-box:nth-child(3)', function () {
    $(".service-box h4").css({ "font-weight": "400", 'color': '#090909' });
    $(this).find("h4").css("font-weight", "700");
    $(this).parent().parent().parent().parent().css('background', 'url(../image/service-2.jpg)');
    $(this).parent().find(".service-arrow").css({ 'transform': 'translate(150px, 76px)', 'color': '#090909' });
  });
  $('main').on('mouseenter', '.service-box:nth-child(4)', function () {
    $(".service-box h4").css({ "font-weight": "400", 'color': '#fff' });
    $(this).find("h4").css("font-weight", "700");
    $(this).parent().parent().parent().parent().css('background', 'url(../image/service-3.jpg)');
    $(this).parent().find(".service-arrow").css({ 'transform': 'translate(320px, 140px)', 'color': '#fff' });
  });
  $('main').on('mouseenter', '.service-box:nth-child(5)', function () {
    $(".service-box h4").css({ "font-weight": "400", 'color': '#090909' });
    $(this).find("h4").css("font-weight", "700");
    $(this).parent().parent().parent().parent().css('background', 'url(../image/service-4.jpg)');
    $(this).parent().find(".service-arrow").css({ 'transform': 'translate(330px, 202px)', 'color': '#090909' });
  });
  $('main').on('mouseenter', '.service-box:nth-child(6)', function () {
    $(".service-box h4").css({ "font-weight": "400", 'color': '#090909' });
    $(this).find("h4").css("font-weight", "700");
    $(this).parent().parent().parent().parent().css('background', 'url(../image/service-5.jpg)');
    $(this).parent().find(".service-arrow").css({ 'transform': 'translate(360px, 266px)', 'color': '#090909' });
  });
  // Rest of your code...
});