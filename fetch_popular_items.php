<?php
header("Content-Type: application/json");
$conn = new mysqli("localhost", "root", "", "dashboard_db");

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

$query = "SELECT item_name, SUM(quantity_sold) AS total_sold FROM sales GROUP BY item_name ORDER BY total_sold DESC LIMIT 5";
$result = $conn->query($query);

$popularItems = [];
while ($row = $result->fetch_assoc()) {
    $popularItems[] = $row;
}

echo json_encode($popularItems);

$conn->close();
?>
