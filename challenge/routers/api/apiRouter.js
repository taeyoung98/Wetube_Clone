import express from "express";
import routes from "../../routes.js";
import { apiDocumentation } from "../../controllers/apiController.js";

export const apiRouter = express.Router();

apiRouter.get(routes.apiDocumentation, apiDocumentation);

export default apiRouter;
