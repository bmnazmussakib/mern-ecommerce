const ApiFeatures = require('../utils/apiFeatures');
const ErrorHandler = require('../utils/errorHandler');
const User = require('../models/userModel');


// Register a User
exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password,
            avatar: {
                public_id: "this is a simple id",
                url: "profile pic url"
            }
        })

        res.status(201).json({
            success: true,
            data: {
                message: "User Registered successfully",
                data: user
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {
                message: error.message,
            },
        });
    }
}