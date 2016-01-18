<?php

$errors = '';
$myemail = 'list-reply@lists.uncommonplaces.com';//<-----Put Your email address here.
if(empty($_POST['email']))
{
    $errors .= "\n Error: all fields are required";
}
$email_address = $_POST['email'];
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
$to = $myemail;
$email_subject = "New Subscriber: $email_address";
$email_body = "You have received a new message. ".
"Email: $email_address\n Message \n $message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: contact-form-thank-you.html');
}

?>