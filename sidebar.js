document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".sidebar .tab");

    const routes = {
        "Dashboard": "dashboard.html",
        "Analytics": "analytics.html",
        "Users": "users.html",
        "Reports": "reports.html",
        "Settings": "settings.html",
        "Help": "help.html",
        "Logout": "logout"  // Special case for logout
    };

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            let tabText = this.innerText.trim();

            if (tabText === "Logout") {
                if (!confirm("Are you sure you want to log out?")) return;
                window.location.href = "logout.html";
                return;
            }

            if (routes.hasOwnProperty(tabText)) {
                window.location.href = routes[tabText];

                // Set active tab (remove previous active class)
                tabs.forEach(t => t.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });
});
