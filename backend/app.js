const express = require("express");
const app = express();

const error = require("./middleware/error");

app.use(express.json())

// Route Import
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute')


app.use('/api/v1', productRoute)
app.use('/api/v1', userRoute)



// Middleware for Error
app.use(error)




module.exports = app;