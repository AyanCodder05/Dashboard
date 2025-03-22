$(document).ready(function() {
    $.ajax({
        url: "fetch_attendance_data.php",  // Fetch data from the PHP script
        method: "GET",
        dataType: "json",
        success: function(data) {
            generateAttendanceChart(data);  // Call function to create the chart
        },
        error: function(error) {
            console.log("Error fetching data:", error);
        }
    });
});

function generateAttendanceChart(data) {
    let chartContainer = $("#attendanceChart");
    chartContainer.empty(); // Clear previous chart

    let maxSales = Math.max(...data.map(d => d.sales_count)); // Get highest sales count

    data.forEach(entry => {
        let cell = $("<div>")
            .addClass("attendance-cell")
            .css("background", `rgba(0, 128, 255, ${entry.sales_count / maxSales})`) // Darker color for more sales
            .attr("title", `${entry.day} ${entry.hour}:00 - ${entry.sales_count} sales`);
        
        chartContainer.append(cell); // Add the cell to the chart container
    });
}
