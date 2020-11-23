import express from "express";
import routes from "../routes.js";
import { courses, coursesNew, coursesMine } from "../controllers/coursesController.js";

export const coursesRouter = express.Router();

coursesRouter.get(routes.courses, courses);
coursesRouter.get(routes.coursesNew, coursesNew);
coursesRouter.get(routes.coursesMine, coursesMine);

export default coursesRouter;
