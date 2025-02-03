import express from "express";
import {
  forgotPassword,
  login,
  logout,
  register,
  verifyEmail,
} from "../controllers/userController.js";
import upload from "../upload/upload.js";

const userRouter = express.Router();

userRouter.post("/register", upload.single("image"), register);
userRouter.get("/verify/:token", verifyEmail);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/forgotpassword", forgotPassword);


export default userRouter;
