import "./db.js";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./routers/movieRouter.js";
import routes from "./routes.js";
import globalRouter from "./routers/globalRouter.js";
import coursesRouter from "./routers/coursesRouter.js";
import apiRouter from "./routers/api/apiRouter.js";
import apiv1Router from "./routers/api/apiv1Router.js";
import apiv2Router from "./routers/api/apiv2Router.js";
import { localsMiddleware } from "./middlewares.js";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", movieRouter);

// app.use(routes.home, globalRouter);
// app.use(routes.courses, coursesRouter);
// app.use(routes.api, apiRouter);
// app.use(routes.apiv1, apiv1Router);
// app.use(routes.apiv2, apiv2Router);

// export default app;
