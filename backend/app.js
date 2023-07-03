const express = require("express");
const app = express();

const error = require("./middleware/error");

app.use(express.json())

// Route Import
const product = require('./routes/productRoute');



app.use('/api/v1', product)

// Middleware for Error
app.use(error)




module.exports = app;