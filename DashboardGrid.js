import React, { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";

const DashboardGrid = () => {
    const [layout, setLayout] = useState([]);

    // Load saved layout from API or local storage
    useEffect(() => {
        fetch("http://localhost:5000/layout")
            .then(res => res.json())
            .then(data => setLayout(data.length > 0 ? data : defaultLayout))
            .catch(() => {
                const savedLayout = localStorage.getItem("dashboard-layout");
                if (savedLayout) {
                    setLayout(JSON.parse(savedLayout));
                }
            });
    }, []);

    // Default layout if nothing is saved
    const defaultLayout = [
        { i: "revenue", x: 0, y: 0, w: 2, h: 2 },
        { i: "profit", x: 2, y: 0, w: 2, h: 2 },
    ];

    const saveLayout = (newLayout) => {
        fetch("http://localhost:5000/save-layout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ layout: newLayout })
        })
        .then(() => localStorage.setItem("dashboard-layout", JSON.stringify(newLayout)))
        .catch(() => alert("Error saving layout!"));
    };

    return (
        <GridLayout
            className="layout"
            layout={layout}
            cols={4}
            rowHeight={100}
            width={800}
            onLayoutChange={saveLayout}
        >
            <div key="revenue" className="widget">Total Revenue</div>
            <div key="profit" className="widget">Net Profit</div>
        </GridLayout>
    );
};

export default DashboardGrid;
