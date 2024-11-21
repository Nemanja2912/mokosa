<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email recipient
    $to = "mokosa.vracar@gmail.com";
    $subject = "Kontakt Forma - Novi Upit";

    // Email content
    $body = "Ime: $name\nEmail: $email\n\nPoruka:\n$message";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Sending email
    if (mail($to, $subject, $body, $headers)) {
        echo "Poruka je uspešno poslata!";
    } else {
        echo "Došlo je do greške pri slanju poruke.";
    }
}
?>