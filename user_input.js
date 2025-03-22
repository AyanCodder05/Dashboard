document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("salesForm");
    const salesList = document.getElementById("salesList");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get user input values
        const itemName = document.getElementById("item").value;
        const quantity = document.getElementById("quantity").value;
        const price = document.getElementById("price").value;
        const total = quantity * price;

        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = `${itemName} - ${quantity} pcs @ ₹${price} each (Total: ₹${total})`;

        // Add the item to the list
        salesList.appendChild(listItem);

        // Clear form fields
        form.reset();
    });
});
