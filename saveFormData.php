<?php
include 'connect.php'; // Include the database connection file

var_dump($_POST);

if (isset($_POST['name'])) {
    $name = $_POST['name'];
} else {
    $name = '';
}

if (isset($_POST['email'])) {
    $email = $_POST['email'];
} else {
    $email = '';
}

if (isset($_POST['message'])) {
    $message = $_POST['message'];
} else {
    $message = '';
}

$sql = "INSERT INTO contact (Name, Email, Message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Form data inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
