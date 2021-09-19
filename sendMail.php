<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";
//Recieve POST from JS file 
$email = $_POST['email'];
$template = $_POST['template'];

//
$mail = new PHPMailer(true);

//Simple Mail Transfer Protocol
$mail->SMTPDebug = 3;                               
$mail->isSMTP();            
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true;                          

//Username and Password for email account
$mail->Username = "maildistro13@gmail.com";                 
$mail->Password = "Team13Mail";  

//???
$mail->SMTPSecure = "tls";                           
$mail->Port = 587;                                   

//Email Header
$mail->From = "name@gmail.com";
$mail->FromName = "Marks & Feedback";

//Recipient Email
$mail->addAddress("$email@aucklanduni.ac.nz","test");

//set Email to not Html
$mail->isHTML(false);

//Set Subject and Body for email
$mail->Subject = "Subject Text";
$mail->Body = "$template";

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
?>