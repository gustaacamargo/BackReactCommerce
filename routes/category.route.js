const express = require('express');
const router = express.Router();
const controller = require("../controllers/category.controller")

const categoryController = new controller()

router.get("/index", categoryController.index);
router.post("/insert", categoryController.insert);
router.put("/update/:id", categoryController.update);
router.delete("/delete/:id", categoryController.delete);

module.exports = router;