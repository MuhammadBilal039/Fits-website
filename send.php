<?php
$to = "muhammad.bilal2021pk@gmail.com";
$subject = "New Message from Website";

$message = "
Name: ".$_POST['name']."
Email: ".$_POST['email']."

Message:
".$_POST['message'];

$headers = "From: Website <no-reply@yourdomain.com>";

mail($to, $subject, $message, $headers);

echo "Message sent successfully!";
?>