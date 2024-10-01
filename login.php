<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="keywords" content="contactpagina">
    <title>Inloggen</title>
    <link rel="stylesheet" type="text/css" href="./css/loginpagina.css">
  </head>
  <body>
    <?php
    if(isset($_POST['submit'])) {
        if(!empty($_POST['gebruikersnaam']) && !empty($_POST['wachtwoord'])) {
        require "dbconnect.php";

        try {
            $gebrknm = $_POST['gebruikersnaam'];
            $wachtw = $_POST['wachtwoord'];
            $sql = "SELECT * FROM gebruikers WHERE gebruikersnaam = '$gebrknm' AND wachtwoord = '$wachtw'";
            $result = $conn->query($sql);
    
            if($result->num_rows == 1) {
                session_start();
                $_SESSION['username'] = $uname;
                $_SESSION['loggedIn'] = true;
            } else {
                echo "<p>Login gegevens niet juist</p>";
            }
        } catch(Exception $e) {
            echo "Query niet gelukt";
         }
      }
    } 
    ?>
  <article class="formlogin"> 
    <form action="login.php" method='POST'>
      <h2>Inloggen</h2>
      Gebruikersnaam:<br>
      <input type='text' class="logininput" name='gebruikersnaam'><br><br>
      Wachtwoord:<br>
      <input type='text' class="logininput" name='wachtwoord'><br><br>
      <input type='submit' class="loginsubmit" name='submit' value='Inloggen'>
     </form>
  </article>
 </body>
</html>
