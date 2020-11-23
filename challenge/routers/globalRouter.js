import express from "express";
import routes from "../routes.js";
import { home, join, login, confirmAccount, photos, profile } from "../controllers/globalController.js";

export const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.confirmAccount, confirmAccount);

globalRouter.get(routes.photos, photos);
globalRouter.get(routes.profile, profile);

export default globalRouter;
