import express from "express"
import { authUser } from "../controllers/userController.js"
const router = express.Router()


// @desc fetch all products 
// @route  GET /api/products
// @access public
router.post("/login", authUser)



export default router