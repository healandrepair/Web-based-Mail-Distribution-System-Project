<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";
//Recieve POST from JS file 
$email = $_POST['email'];
$template = $_POST['template'];
$subjectText = $_POST['subjectText'];

//
$mail = new PHPMailer(true);

//Simple Mail Transfer Protocol (SMTP)
//Enable SMTP debugging
$mail->SMTPDebug = 3; 

//Set PHPMailer to use SMTP                    
$mail->isSMTP();   

//SMTP Hostname         
$mail->Host = "smtp.gmail.com";

//SMTP host requires authentication
$mail->SMTPAuth = true;                          

//Username and Password for email account
$mail->Username = "maildistro13@gmail.com";                 
$mail->Password = "Team13Mail";  

//TLS encryption
$mail->SMTPSecure = "tls";       

//TCP Port
$mail->Port = 587;                                   

//Email Header
$mail->From = "name@gmail.com";
$mail->FromName = "Marks & Feedback";

//Recipient Email
$mail->addAddress("$email@aucklanduni.ac.nz","test");

//set Email to not Html format
$mail->isHTML(false);

//Set Subject and Body for email
$mail->Subject = "$subjectText"; 
$mail->Body = "$template";

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
?>