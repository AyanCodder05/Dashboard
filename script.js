document.addEventListener("DOMContentLoaded", () => {
    const widgetContainer = document.getElementById("widgetContainer");
    const saveLayoutBtn = document.getElementById("saveLayout");

    // Load saved layout
    fetch("http://localhost:5000/layout")
        .then(res => res.json())
        .then(layout => {
            widgetContainer.innerHTML = "";
            layout.forEach(widgetHTML => {
                const div = document.createElement("div");
                div.innerHTML = widgetHTML;
                div.firstChild.classList.add("widget");
                widgetContainer.appendChild(div.firstChild);
            });
        });

    // Save layout
    saveLayoutBtn.addEventListener("click", () => {
        const widgets = [...widgetContainer.children].map(w => w.outerHTML);
        fetch("http://localhost:5000/layout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ layout: widgets })
        }).then(() => alert("Layout saved!"));
    });
});

