<?php
//Get the contents of the JSON file
$strJsonConfig = file_get_contents("./config.json");
//As JSON itself is useles in PHP, we convert it to array
$arrayJsonConfig = json_decode($strJsonConfig);
$PHPMailerConfig = $arrayJsonConfig["PHPMailer"]; 

require($PHPMailerConfig["PHPMailerPath"]);
require($PHPMailerConfig["SMTPPath"]);

$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$cell = addslashes($_POST['cell']);
$message  = addslashes($_POST['message']);


$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->IsSMTP(); // enable SMTP
//$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
//$mail->Debugoutput = 'html';

$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = PHPMailerConfig["Host"];
$mail->Port = PHPMailerConfig["Port"]; 
$mail->IsHTML(true);
$mail->Username = PHPMailerConfig["Username"];
$mail->Password = PHPMailerConfig["Password"];
 
$mail->SetFrom($email, $nome);
$mail->Subject = "Contato do Formulario";
$mail->Body = "Nome: " .$nome . "<br>Celular: " . $cell . "<br>Mensagem: " . $message;
$mail->AddAddress(PHPMailerConfig["Email"]);


if(!$mail->Send()) {
   echo "Mailer Error: " . $mail->ErrorInfo;
} else {
   echo "Mensagem enviada com sucesso";
}

?>