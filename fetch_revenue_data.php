<?php
// Connect to Database
include 'db_connect.php';

// Query for this week's revenue
$query1 = "SELECT SUM(revenue) AS total FROM sales_data WHERE WEEK(date) = WEEK(CURDATE())";
$result1 = mysqli_query($conn, $query1);
$this_week = mysqli_fetch_assoc($result1)['total'];

// Query for last week's revenue
$query2 = "SELECT SUM(revenue) AS total FROM sales_data WHERE WEEK(date) = WEEK(CURDATE()) - 1";
$result2 = mysqli_query($conn, $query2);
$last_week = mysqli_fetch_assoc($result2)['total'];

// Return JSON response
echo json_encode(["this_week" => $this_week, "last_week" => $last_week]);
?>
