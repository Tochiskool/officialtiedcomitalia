const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();

//HTTP Request Loger
app.use(morgan("tiny"));

//Serve images css and js files in a directory named public.
if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
