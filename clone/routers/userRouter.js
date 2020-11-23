import express from "express";
import { changePassword, editProfile, users, usersDetail } from "../controllers/userController.js";
import routes from "../routes.js";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, usersDetail);

export default userRouter;

/**
 * Model : data
 * View : how does the data look
 * Control : function that looks for the data
 */
