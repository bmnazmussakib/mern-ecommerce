const app = require('./app')

const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Config
dotenv.config({path: "backend/config/config.env"});

// Connect Database
connectDB()

// Handling Uncaught Exception
process.on("uncaughtException", (error) => {
    console.log(`Error: ${error.message}`)
    console.log(`Shutting down the server due to uncaught Exception`);

    process.exit(1)
})


const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
})


// Unhandled Promise Rejection
process.on("unhandledRejection", (error) => {
    console.log(`Error: ${error.message}`)
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1)
    })
})
