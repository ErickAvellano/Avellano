<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
  
    $con = new mysqli('localhost', 'root', '', 'websystem_db');
    if ($con->connect_error) {
      die('Connection Failed: '.$con->connect_error);
    } else {
      $stmt = $con->prepare("INSERT INTO contact (name, email, message) VALUES (?, ?, ?)");
      $stmt->bind_param("sss", $name, $email, $message);
      $stmt->execute();
      echo "Message Sent";
      $stmt->close();
      $con->close();
    }
?>
