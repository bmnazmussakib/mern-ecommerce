const mongoose = require('mongoose')


const connectDB = async () => {
    // try {
    //     await mongoose.connect(process.env.MONGODB_ATLAS_URI)
    //     console.log("MongoDB Connected Successfully ✅")
    // } catch (error) {
    //     console.log('erroe: ', error)
    // }

    await mongoose.connect(process.env.MONGODB_ATLAS_URI)
    console.log("MongoDB Connected Successfully ✅")
}

module.exports = connectDB