$(document).ready(function () {
    if ($("#itemsContainer").length) {
        $.ajax({
            url: "fetch_popular_items.php",
            method: "GET",
            dataType: "json",
            success: function (data) {
                if (data.length > 0) {
                    displayPopularItems(data);
                } else {
                    $("#itemsContainer").html("<p>No data available.</p>");
                }
            },
            error: function (error) {
                console.log("Error fetching data:", error);
            }
        });
    }
});

function displayPopularItems(data) {
    let container = $("#itemsContainer");
    container.empty();

    data.forEach(item => {
        let itemCard = $(`
            <div class="item-card">
                <div class="bar"></div>
                <span>${item.item_name} - ${item.total_sold} Sold</span>
            </div>
        `);
        container.append(itemCard);
    });
}
