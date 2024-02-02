// Loading Common Element Using External File
$("#header").load("header.html");
$("#footer").load("footer.html");


// AOS Js (Reveal Animation)
AOS.init();



// Form Validation on submit
$(document).ready(function () {
  $("form").submit(function (event) {
      var fullName = $("#full-name").val();
      var phone = $("#phone").val();
      var email = $("#email").val();
      var message = $("#message").val();
      var isValid = true;

      // Validate full name (not empty)
      if (fullName.trim() === "") {
          isValid = false;
          alert("Please enter your full name.");
      }

      // Validate phone number using regular expression
      var phoneRegex = /^[0-9]{10}$/; // Assumes a 10-digit phone number
      if (!phone.match(phoneRegex)) {
          isValid = false;
          alert("Please enter a valid 10-digit phone number.");
      }

      // Validate email using regular expression
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.match(emailRegex)) {
          isValid = false;
          alert("Please enter a valid email address.");
      }

      // Validate message (not empty)
      if (message.trim() === "") {
          isValid = false;
          alert("Please enter a message.");
      }

      if (!isValid) {
          event.preventDefault(); // Prevent form submission if validation fails
      }
  });
});



// -----====== Counter Player =======-----
var counter = $(".counter").offset().top - 300;
$(window).scroll(function () {
  var scrTop = $(window).scrollTop();
  if (scrTop > counter) {
    $(".num").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 1000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
  }
});