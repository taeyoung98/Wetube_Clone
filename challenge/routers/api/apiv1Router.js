import express from "express";
import routes from "../../routes.js";
import { apiv1Buy, apiv1Refund } from "../../controllers/apiController.js";

export const apiv1Router = express.Router();

apiv1Router.get(routes.apiv1Buy, apiv1Buy);
apiv1Router.get(routes.apiv1Refund, apiv1Refund);

export default apiv1Router;
