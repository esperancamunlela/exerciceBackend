import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
} from "../controllers/user-controllers.js";

const userRoute = express.Router();

userRoute.get("/", getAllUsers);
userRoute.get("/:id", getUser);
userRoute.post("/", createUser);
userRoute.delete("/:id",deleteUser);


export default userRoute;