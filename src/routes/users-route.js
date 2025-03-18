import express from "express";
import { userSignUp } from "../resolvers/users/user-sign-up.js";
import { getUserRegisterById } from "../resolvers/users/get.users.js";
import { loginUsers } from "../resolvers/users/login.users.js";
export const usersRouter = express.Router();

usersRouter.post("/", userSignUp)
usersRouter.get("/", getUserRegisterById);
usersRouter.post("/login", loginUsers);