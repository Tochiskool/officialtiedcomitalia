//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

//Thinking of mysql backend
const mysql = require('mysql');

//Create a connection to the database
//Mongo || mysql workbench db


//Door to my app at 8080
const PORT = process.env.PORT || 8080;

//Creating the app server
const app = express();

//Handling Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP Request Loger
app.use(morgan("tiny"));

//Serve images css and js files in a directory named public.
if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));
}
//Start listening to what the app has to offer
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
