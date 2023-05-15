<?php    //Обязательная проверка на пустоту 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail -> CharSet = 'UTF-8';
$mail -> setLanguage('ru','phpmailer/language');
$mail->isHTML(true); 

$mail->setFrom('artyuxov8@gmail.com', 'ПРИВЕТ ЭТО АРТЮХ');
$mail->addAddress('artyuxov90@list.ru');
$mail->Subject = 'Привет это вмелия';

$body = '<h1>Это мое письмо</h1>';

$body = '<p> Лавани сошла' .$_POST['date'] '</p>';

$body = '<p> Тело лавины выглядет:' .$_POST['qw2'] '</p>';

?>