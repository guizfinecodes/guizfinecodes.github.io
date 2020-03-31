<?php
if(!isset($_POST['submits']))
{
  //This page should not be accessed directly. Need to submit the form.
  echo "error; you need to submit the form!";
}

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$visitor_email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

//Validate first
if(empty($firstname)||empty($visitor_email)||empty($phone)||empty($subject)||empty($message)) 
{
    echo "Firstame, email, phone, subject and message are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'guiz.finecodes@gmail.com';//<== update the email address
$email_subject = "RE: $subject ";
$email_body = "You have received a new message from the user $firstname." ".$lastname.\n".
    "Here is the message:\n $message \n".
    "Phone Number: $phone \n".
    
$to = "guiz.finecodes@gmail.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: index.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 


<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
<style>
a 
{
  font-family : Arial, Helvetica, sans-serif;
  font-size : 14px; 
}

</style>
<p>
  PHP not supported!
</p>
<p>
<a href='https://guizfinecodes.github.io/index.html#Contact'
><button style="text-decoration-color: transparent; background-color: orange;">Go back</button></a>
</p>

</body>
</html>