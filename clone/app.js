import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import globalRouter from "./routers/globalRouter.js";
import routes from "./routes.js";
import { localsMiddleware } from "./middlewares.js";
const app = express();

// middleware func -> last func으로 권한을 요청할 next 필요

// middleware
app.use(helmet()); // 앱 보안에 good
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// local to global
// way 1. app.use((req, res, next) => {});
// way 2. app.use(function (req, res, next) {});
app.use(localsMiddleware); // way 3. best 위치 중요

// ./middlware

// routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
