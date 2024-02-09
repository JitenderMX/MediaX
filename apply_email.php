<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Set recipient email address
    $to = "jitender.work.mediax@gmail.com";
    
    // Set email subject
    $subject = "New Career Form Submission";
    
    // Build email message
    $message = "Full Name: " . $_POST['full-name'] . "\n";
    // Add other form fields to the message
    $message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Phone: " . $_POST['number'] . "\n";
    $message .= "Current Company: " . $_POST['company'] . "\n";
    $message .= "Current CTC: " . $_POST['ctc'] . "\n";
    $message .= "Notice Period: " . $_POST['notice-period'] . "\n";
    $message .= "Where did you hear about us?: " . $_POST['where-you-hear'] . "\n";
    
    // File upload handling
    $file = $_FILES['upload-resume'];
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    $fileError = $file['error'];
    
    // Check if file was uploaded without errors
    if ($fileError === 0) {
        // Read file contents
        $fileContent = file_get_contents($fileTmpName);
        
        // Attach the file to the email
        $boundary = md5(rand());
        $headers = "From: " . $_POST['email'] . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
        $message .= "\r\n--$boundary\r\nContent-Type: application/octet-stream; name=\"$fileName\"\r\nContent-Transfer-Encoding: base64\r\nContent-Disposition: attachment; filename=\"$fileName\"\r\n\r\n";
        $message .= chunk_split(base64_encode($fileContent));
        $message .= "\r\n\r\n--$boundary--";

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email.";
        }
    } else {
        echo "Error uploading file.";
    }
} else {
    echo "Invalid request.";
}
?>
