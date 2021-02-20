import express from "express"
import controller from "../controllers/user.controller.js"

const router = express.Router()
const userController = new controller()

router.get("/test", userController.user_test);

export default router