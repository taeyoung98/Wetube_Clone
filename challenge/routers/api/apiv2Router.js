import express from "express";
import routes from "../../routes.js";
import { apiv2Remove, apiv2Edit } from "../../controllers/apiController.js";

export const apiv2Router = express.Router();

apiv2Router.get(routes.apiv2Remove, apiv2Remove);
apiv2Router.get(routes.apiv2Edit, apiv2Edit);

export default apiv2Router;
