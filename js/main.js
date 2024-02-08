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
  $('body,html').animate({scrollTop : 0}, 10);

    $('main').load('home.html', initializeOtherJs);
  } else if (validPages.includes(page)) {
    // If the page value is valid, load corresponding HTML content into the main tag
  $('body,html').animate({scrollTop : 0}, 10);

    $('main').load(page + '.html', initializeOtherJs);
  } else {
    // If the page value is not valid, load the 404.html page
  $('body,html').animate({scrollTop : 0}, 10);

    $('main').load('404.html', initializeOtherJs);
  }
}
// Function to initialize the Slick slider
function initializeOtherJs() {
  // $('body,html').animate({scrollTop : 0}, 500);
  

  // Handle click event for Page Load Link
  $('a.page-load-link').on('click', function (e) {
    // e.preventDefault();
    // Get the value after '#' from the href attribute
    var page = $(this).attr('href').substring(1);
    // alert(page);
    // Call the function to load content based on page value
    loadContent(page);
  }); 
  $(".sa-left-box").on('click', function(){
   $(this).parent().toggleClass("active");
  //  $(this).parent().toggleClass("d-flex");
  })
 
  $('.service-box h4').hover(function () {
    let childClass = "child-" + $(this).parent().index();
    $("#service-sec").attr("class","service");
    $("#service-sec").addClass(childClass);
  });
  // Handle mouseenter event for .service-box elements inside the main element
  // $('.service-box:nth-child(2)').on('mouseenter', function () {
  //   $(".service-box h4").css({ "font-weight": "400", 'color': '#fff' });
  //   $(this).find("h4").css("font-weight", "700");
  //   $(this).parent().parent().parent().parent().css('background', 'url(../image/service-1.jpg)');
  //   $(this).parent().find(".service-arrow").css({ 'transform': 'translate(270px, 13px)', 'color': '#fff' });
  // });
  // $('.service-box:nth-child(3)').on('mouseenter', function () {
  //   $(".service-box h4").css({ "font-weight": "400", 'color': '#090909' });
  //   $(this).find("h4").css("font-weight", "700");
  //   $(this).parent().parent().parent().parent().css('background', 'url(../image/service-2.jpg)');
  //   $(this).parent().find(".service-arrow").css({ 'transform': 'translate(150px, 74px)', 'color': '#090909' });
  // });
  // $('.service-box:nth-child(4)').on('mouseenter', function () {
  //   $(".service-box h4").css({ "font-weight": "400", 'color': '#fff' });
  //   $(this).find("h4").css("font-weight", "700");
  //   $(this).parent().parent().parent().parent().css('background', 'url(../image/service-3.jpg)');
  //   $(this).parent().find(".service-arrow").css({ 'transform': 'translate(320px, 134px)', 'color': '#fff' });
  // });
  // $('.service-box:nth-child(5)').on('mouseenter', function () {
  //   $(".service-box h4").css({ "font-weight": "400", 'color': '#090909' });
  //   $(this).find("h4").css("font-weight", "700");
  //   $(this).parent().parent().parent().parent().css('background', 'url(../image/service-4.jpg)');
  //   $(this).parent().find(".service-arrow").css({ 'transform': 'translate(330px, 194px)', 'color': '#090909' });
  // });
  // $('.service-box:nth-child(6)').on('mouseenter', function () {
  //   $(".service-box h4").css({ "font-weight": "400", 'color': '#090909'});
  //   $(this).find("h4").css("font-weight", "700");
  //   $(this).parent().parent().parent().parent().css('background', 'url(../image/service-5.jpg)');
  //   $(this).parent().find(".service-arrow").css({ 'transform': 'translate(360px, 257px)', 'color': '#090909' });
  // });
  // Rest of your code...
}
$(document).ready(function () {
  $(window).on('hashchange', function() {
    var initialPage = window.location.hash.substring(1);
    loadContent(initialPage);
});
  // Load content on window load
  var initialPage = window.location.hash.substring(1);
  loadContent(initialPage);
});

$(document).ready(function () {
  
});