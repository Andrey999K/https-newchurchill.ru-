<?php
require_once('phpmailer/PHPMailerAutoload.php');
require_once('config.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if (isset($_POST['name'])) {
            $name = "<b>Имя: </b><br>" . strip_tags($_POST['name']) . "<br>";
        }
        if (isset($_POST['email'])) {
            $mail_user = "<b>E-mail: </b><br>" . strip_tags($_POST['email']) . "<br>";
        }
        if (isset($_POST['phone'])) {
            $tel = "<b>Телефон: </b><br>" . strip_tags($_POST['phone']) . "<br>";
        }

        $counter = 0;
        $body;
        $bodyHeader = '<table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px; border-right:1px; border-color:#e2e2e2; border-style: solid; width:600px" width="600" align="center">
			<tr >
				<th colspan="3" style="width: 300px; padding-top:15px; padding-bottom:15px; padding-right:15px; padding-left:15px; text-align:center; border-top:1px; border-left:1px; border-right:0; border-bottom:0; border-color:#e2e2e2; border-style: solid;">' . $name . '</th>
                <th colspan="3" style="width: 300px; padding-top:15px; padding-bottom:15px; padding-right:15px; padding-left:15px; text-align:center; border-top:1px; border-left:1px; border-right:0; border-bottom:0; border-color:#e2e2e2; border-style: solid;">' . $mail_user . '</th>
                <th colspan="3" style="width: 300px; padding-top:15px; padding-bottom:15px; padding-right:15px; padding-left:15px; text-align:center; border-top:1px; border-left:1px; border-right:0; border-bottom:0; border-color:#e2e2e2; border-style: solid;">' . $tel . '</th>
			</tr>';

        $bodybottom = '</table>';
    }

    if (defined('HOST')) {
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = HOST;
        $mail->SMTPAuth = true;
        $mail->Username = LOGIN;
        $mail->Password = PASS;
        $mail->SMTPSecure = 'ssl';
        $mail->Port = PORT;
    } else {
        $mail = new PHPMailer;
    }
    $mail->setFrom(SENDER);
    $mail->addAddress(CATCHER);
    if (defined(CATCHER2)) {
        $mail->addAddress(CATCHER2);
    }
    $mail->CharSet = CHARSET;
    $mail->isHTML(true);
    $mail->Subject = SUBJECT; // Заголовок письма
    $mail->Body = "$bodyHeader $body $bodybottom";
    if (!$mail->send()) {
        echo "Ошибка, сообщение не отправлено!";
    } else {
        header("Location: ../../index.html");
    }
} else {
    header("Location: /");
}
