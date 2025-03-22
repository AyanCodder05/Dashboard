const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/dashboardDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema and model
const LayoutSchema = new mongoose.Schema({ layout: Array });
const Layout = mongoose.model("Layout", LayoutSchema);

// Fetch layout from database
app.get("/layout", async (req, res) => {
  const savedLayout = await Layout.findOne();
  res.json(savedLayout ? savedLayout.layout : []);
});

// Save layout to database
app.post("/layout", async (req, res) => {
  await Layout.deleteMany();
  const newLayout = new Layout({ layout: req.body.layout });
  await newLayout.save();
  res.json({ message: "Layout saved successfully!" });
});

// Serve specific HTML pages
const pages = ["analytics", "users", "reports", "settings", "help", "logout"];
pages.forEach((page) => {
  app.get(`/${page}.html`, (req, res) => {
    res.sendFile(path.join(__dirname, "public", `${page}.html`));
  });
});

// Catch-all route for React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
