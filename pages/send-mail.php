<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
 
    // Get form data safely
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));
 
    // Your email
    $to = "marketing@fits.com.pk";
 
    // Email subject
    $mail_subject = "Contact Form: " . $subject;
 
    // Email body
    $mail_body = "
    You have received a new message from your website contact form.
 
    Name: $name
    Email: $email
    Subject: $subject
 
    Message:
    $message
    ";
 
    // Headers (IMPORTANT: sender is user's email)
    $headers  = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
 
    // Send email
    if (mail($to, $mail_subject, $mail_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again.";
    }
}
?>