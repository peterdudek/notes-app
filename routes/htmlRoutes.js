// HTML routes
var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../data/index.html"));
    });

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../data/notes.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../data/index.html"));
    });
}