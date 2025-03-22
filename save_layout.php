<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $layout = $_POST["layout"];

    
    $query = "UPDATE user_dashboard SET layout = '$layout' WHERE user_id = 1";
    mysqli_query($conn, $query);

    echo "Layout saved successfully!";
}
?>
