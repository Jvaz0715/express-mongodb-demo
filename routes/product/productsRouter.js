const { json } = require("express");
const express = require("express");
const router = express.Router();
const productController = require("./controller/productController");

// get all products
router.get("/get-all-products", function (req, res){
    productController.getAllProducts(function (err, payload) {
        if (err) {
            res.status(500).json({message: "Error", error: err });
        } else {
            res.json({ message: "success", data: payload})
        }
    })
});

// get product by id
router.get("/get-product-by-id/:id", function (req, res) {

});

// post new product
router.post("/create-product", function (req,res){
    productController.createProduct(req.body, function (err, payload) {
        if (err) {
            res.status(500).json({ message: "Error", error: err });
        } else {
            res.json({ message: "Success", data: payload })
        };
    });
});

//put update product
router.put("/update-product-by-id/:id", function (req, res){
    productController.updateProductByID(req.params.id, req.body, function (err, updatedPayload) {
        if (err) {
            res.status(500).json({
                message: "Error",
                error: err
            })
        } else {
            res.json({
                message: "Success",
                data: updatedPayload
            })
        }
    })
});

// delete product by id
router.delete("/delete-product-by-id/:id", function (req, res) {
    productController.deleteProductByID(req.params.id, function(err, deletedPayload) {
        if (err) {
            res.status(500).json({ message: "Error",
                error: err
            })
        } else {
            res.json({
                message: "Success",
                data: deletedPayload
            })
        }
    })
});




module.exports = router;