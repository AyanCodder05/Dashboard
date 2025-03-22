$(document).ready(function () {
    if ($("#revenueChart").length) {
        $.ajax({
            url: "fetch_revenue_data.php",
            method: "GET",
            dataType: "json",
            success: function (data) {
                if (data.this_week !== undefined && data.last_week !== undefined) {
                    generateRevenueChart(data);
                } else {
                    console.error("Invalid data received:", data);
                }
            },
            error: function (error) {
                console.log("Error fetching revenue data:", error);
            }
        });
    }
});

function generateRevenueChart(data) {
    let ctx = document.getElementById("revenueChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["This Week", "Last Week"],
            datasets: [{
                label: "Total Revenue",
                data: [data.this_week, data.last_week],
                backgroundColor: ["#4CAF50", "#FF9800"],
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}
