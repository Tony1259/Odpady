<?php
if(isset ($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = 'ninh151@seznam.cz';
    $headers = 'From: My website'.$mailFrom;
    $txt = 'You have received an e-mail from '.$name.'.\n\n'.$message;

    mail($mailTo, $txt, $headers);
    header('Location: index.php?mailsend');
}