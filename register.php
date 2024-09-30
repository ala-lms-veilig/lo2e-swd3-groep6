<!DOCTYPE HTML>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Registreren">
    <meta name="author" content="Zine, Juan, Yassine, Alexandros">
    <meta name="keywords" content="contactpagina">
    <title>Registreren</title>
    <link rel="stylesheet" type="text/css" href="./css/registerpagina.css">
  </head>
<body>
  
<?php
if(isset($_POST['submit'])) {
    if(!empty($_POST['gebruikersnaam']) && !empty($_POST['wachtwoord'])) {
        
        try{
            $conn = new mysqli("localhost","root","","#");
        } catch(Exception $e) {
            $error = "Geen connectie aan Database";
            die($error);
        }
        $user = $_POST['gebruikersnaam'];
        $pass = $_POST['wachtwoord'];

        $sql = "INSERT INTO gebruikers VALUES (NULL,'$user','$pass')";

        try{
            $conn->query($sql);

            $conn->close();
            echo "Gebruiker Toegevoegd";

        } catch(Exception $e) {
            $error = "Geen goede query";
            die($error);
        }
    } else {
        echo "Vul beide velden in";
    }
}

?>

<form method='POST'>
    Gebruikersnaam:<br>
    <input type='text' name='gebruikersnaam'><br><br>
    Wachtwoord:<br>
    <input type='text' name='wachtwoord'><br><br>
    <input type='submit' name='submit' value='opslaan'>
</form>

</body>
</html>