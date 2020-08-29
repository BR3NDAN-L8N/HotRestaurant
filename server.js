// Dependencies
// =============================================================
var express = require("express");
// node module for constructing path names
var path = require("path");  

// Sets up the Express App
// =============================================================
var app = express();
let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8000;
}

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());