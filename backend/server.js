'use strict'
// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");
const cors = require("cors")


// Import DB Connection
require("./config/db");


// create express app
const  app = express();

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors())

// define port to run express app
const  port = process.env.PORT || 3005;

// Import API route
var routes = require('./routes/routes');
routes(app);

// Add endpoint
app.get('/', (req, res) => {
res.send("Hello World");
});

// Listen to server
app.listen(port, () => {

console.log(`Server running at http://localhost:${port}`);
});