<?php
header("Content-Type: application/json");
$conn = new mysqli("localhost", "root", "", "dashboard_db");

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

$query = "SELECT 
            SUM(quantity_sold * price_per_item) AS totalRevenue,
            SUM((quantity_sold * price_per_item) * 0.2) AS netProfit,
            SUM(quantity_sold) AS timeSold,
            ((SUM(quantity_sold * price_per_item) - 5000) / 5000) * 100 AS growth
          FROM sales"; 

$result = $conn->query($query);
$data = $result->fetch_assoc();

echo json_encode($data);

$conn->close();
?>
