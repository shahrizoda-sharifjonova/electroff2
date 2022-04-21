<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // от кого письмо
    $mail->setFrom('Info@electorff.ru', 'Electorff');
    // кому отправить
    $mail->addAddress('Info@electorff.ru');

    // тема письмо
    $mail->Subject = 'Electorff';

    // тело письмо
    $body = '<h1>Electorff</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['number']))){
        $body.='<p><strong>Номер телефона:</strong> '.$_POST['number'].'</p>';
    }
    if(trim(!empty($_POST['social']))){
        $body.='<p><strong>Где удобно получить консультацию:</strong> '.$_POST['social'].'</p>';
    }

    $mail->Body = $body;

    // Отправляем
    if (!$mail->send()){ 
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    // header('Content-type: application/json');
    echo json_encode($response);
?>