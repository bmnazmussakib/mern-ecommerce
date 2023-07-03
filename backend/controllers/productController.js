const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');

// CREATE PRODUCT -- ADMIN
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({
            success: true,
            data: {
                message: "Product created successfully",
                data: product
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


// UPDATE PRODUCT -- ADMIN
exports.updateProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHandler("Product not found", 404))
        }
        else {
            product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json({
                success: true,
                data: {
                    message: "Product updated successfully",
                    data: product
                }
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {
                message: error.message,
            },
        });
    }
}


// DELETE PRODUCT -- ADMIN
exports.deleteProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHandler("Product not found", 404))
        } else {
            await Product.deleteOne({ _id: req.params.id })
            res.status(200).json({
                success: true,
                data: {
                    message: "Product deleted successfully"
                },
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {
                message: error.message,
            },
        });
    }
};


// GET SINGLE PRODUCT
exports.getSingleProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            return next(new ErrorHandler("Product not found", 404))
        } else {
            res.status(200).json({
                success: true,
                data: {
                    message: "All Product fetched successfully",
                    data: product
                }
            })
        }
    } catch (error) {

        if (error.name === "CastError") {
            const message = `Resource not found. Invalid: ${error.path}`;
            error = new ErrorHandler(message, 400)

            // res.status(400).json({
            //     success: false,
            //     data: {
            //         message: error.message
            //     },
            // });
       }

        res.status(400).json({
            success: false,
            data: {
                message: error.message
            },
        });
    }
}


// GET ALL PRODUCTS
exports.getAllProduct = async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json({
            success: true,
            data: {
                message: "All Product fetched successfully",
                data: product
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {
                message: error.message
            },
        });
    }
}