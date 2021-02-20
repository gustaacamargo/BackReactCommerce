const express = require('express');
const router = express.Router();
const controller = require("../controllers/user.controller")

const userController = new controller()

router.get("/index", userController.index);
router.get("/show/:id", userController.show);
router.post("/insert", userController.insert);
router.put("/update/:id", userController.update);
router.delete("/delete/:id", userController.delete);

module.exports = router;