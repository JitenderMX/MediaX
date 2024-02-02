<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST["full-name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "armoniaretail@gmail.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    $body = "Full Name: $full_name\nPhone: $phone\nEmail: $email\nMessage:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        // echo "Success! Your message has been sent.";
        header("Location: thankyou.html");

    } else {
        // echo "Error! Unable to send message.";
        header("Location: error.html");

    }
}
?>
