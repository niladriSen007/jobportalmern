import express from 'express'
import { loginUser, registerUser } from '../controllers/authController.js'
import userAuth from '../middlewares/authMiddleware.js'


const router = express.Router()

router.post("/register",registerUser)
router.post("/login",userAuth,loginUser)


export default router