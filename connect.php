<?php
if (!empty($_POST)) {
  $name = isset($_POST['name']) ? $_POST['name'] : '';
  $email = isset($_POST['email']) ? $_POST['email'] : '';
  $message = isset($_POST['message']) ? $_POST['message'] : '';

$conn = new mysqli('localhost','root','','websystem_db');
if($conn->connect_error){
  die('Connection Failed: ' . $conn->connect_error);
}else{
  $stmt = $conn->prepare("insert into contact (Name, Email, Message) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $name, $email, $message);
  $stmt->execute();
  echo "Registration Successful";
  $stmt->close();
  $conn->close();
}
}
?>