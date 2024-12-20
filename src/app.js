const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const env = require("dotenv");
env.config();

const port = process.env.PORT || 8000;

// Static and templates paths
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// Set up view engine and views path
app.set('view engine', 'hbs');
app.set('views', templates_path);

// Register partials
hbs.registerPartials(partials_path);

// Serve static files
app.use(express.static(static_path));

// Routing
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/weather", (req, res) => {
    res.render("weather"); // Ensure weather.hbs exists in the views folder
});
app.get("*", (req, res) => {
    res.render("404error");
});

// Start server
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
