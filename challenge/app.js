import express from "express";
import routes from "./routes.js";
import globalRouter from "./routers/globalRouter.js";
import coursesRouter from "./routers/coursesRouter.js";
import apiRouter from "./routers/api/apiRouter.js";
import apiv1Router from "./routers/api/apiv1Router.js";
import apiv2Router from "./routers/api/apiv2Router.js";
import { localsMiddleware } from "./middlewares.js";

const app = express();

app.set("view engine", "pug");
app.use(localsMiddleware);

// routes
app.use(routes.home, globalRouter);
app.use(routes.courses, coursesRouter);
app.use(routes.api, apiRouter);
app.use(routes.apiv1, apiv1Router);
app.use(routes.apiv2, apiv2Router);

export default app;
