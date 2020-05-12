const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3850;
if (process.env.NODE_ENV == "development") {
  console.log("Development mode is on");
}
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to nodejs mysql express restful application." });
});

require("./routes/customer.routes.js")(app);

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}.`);
});
