

var express = require("express");
var PORT = process.env.PORT || 5019;
var app = express();



app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controllers.js");
app.use(routes);
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});