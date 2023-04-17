<html>

<head>

<style>

</style>
</head>

<body>
<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
if (isset($_POST['country_code'])) {
    $cc =  $_POST['country_code'];
    $phone = $_POST['Phone'];
} else {
    $cc =  '';
    $phone = '';
}


$formcontent="From: $name \n Message: $message Contact : $cc $phone";
$recipient = "jitendra.kukreja@greatwits.com";
/*$subject = "Contact Form";*/
$mailheader = "From: $email \r\n";
$mailRes = mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
if (isset($mailRes)) {
    header("URL: '../view/thank-you.html'");
} else {
    echo $mailRes;
}

// echo "Thank You!! Your contact information has been sent successfully";
?>
<!-- <br><br><br> -->
<!-- <font size="6"><a href="http://greatwits.com">Back to Greatwits</a></font> -->
</body>

</html>