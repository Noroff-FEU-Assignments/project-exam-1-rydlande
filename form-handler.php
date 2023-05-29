<?php
$success = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = "eirryd24360@stud.noroff.no";    // Recipient of the form data
    $from = $_POST['email'];  // Sender's email (assuming the email field has the name attribute set to "email")
    $msg = "";

    foreach ($_POST as $key => $value) {
        if ($key !== 'email') {
            $msg .= "\t" . "$key: $value" . "\r\n";
        }
    }

    if (!empty($msg)) {
        $msg = "This was submitted:" . "\r\n" . "\r\n" . $msg;

        if (mail($to, "Mail from form test", $msg, "From: $from")) {
            $success = true;
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title><?= ($success) ? "Success" : "Failure" ?></title>
    <style>
        * { font-size: 24px }
    </style>
</head>
<body>

<?php if ($success): ?>
    <p>The form worked!</p>
    <p><a href="form.html">Back</a> / <a href="/">Home</a></p>
<?php else: ?>
    <p>Sorry, but something went wrong. Please <a href="form.html">go back and try again</a>!</p>
<?php endif; ?>

<hr>
</body>
</html>
