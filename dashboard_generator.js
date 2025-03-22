$(document).ready(function() {
    $("#widgetContainer").sortable({ placeholder: "ui-state-highlight" });
    
    $("#addWidget").click(function() {
        const widget = $("<div class='widget'>New Widget</div>");
        $("#widgetContainer").append(widget);
    });
});
