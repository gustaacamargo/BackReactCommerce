const express = require('express');
const router = express.Router();
const controller = require("../controllers/product.controller")

const productController = new controller()

router.get("/index", productController.index);
router.get("/show/:id", productController.show);
router.post("/insert", productController.insert);
router.put("/update/:id", productController.update);
router.delete("/delete/:id", productController.delete);

module.exports = router;