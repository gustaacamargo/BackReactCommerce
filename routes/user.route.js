const express = require('express');
const router = express.Router();
const controller = require("../controllers/user.controller")

const userController = new controller()

router.get("/test", userController.user_test);
router.post("/insert", userController.insert);

module.exports = router;