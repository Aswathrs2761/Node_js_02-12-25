import express from "express"
import { getUserDetails, loginUser, registeruser } from "../Controllers/user.controller.js"
import { authMiddleware } from "../Middleware/Middleware.js"

const router = express.Router()

router.post("/register",registeruser)
router.post("/login",loginUser)
router.get("/userdetails", authMiddleware, getUserDetails)




export default router