<?php
$host = "localhost"; // Change if needed
$user = "root"; // Database username
$password = ""; // Database password
$dbname = "your_database_name"; // Your database name

$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
