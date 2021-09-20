import express from "express"
import { authUser, getUserProfile, registerUser, updateUserProfile } from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"
const router = express.Router()


// @desc fetch all products 
// @route  GET /api/products
// @access public
router.route("/").post(registerUser)
router.post("/login", authUser)
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile)



export default router