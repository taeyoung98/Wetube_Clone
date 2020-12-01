import express from "express";
import { getAdd, home, movieDetail, postAdd } from "../controllers/movieController.js";

const movieRouter = express.Router();

movieRouter.get("/", home);
/*
Here add a way to handle GET and POST requests to the "/add" URL
Make sure is ABOVE /:id or it WON'T work .
*/

movieRouter.get("/add", getAdd);
movieRouter.post("/add", postAdd);

movieRouter.get("/:id", movieDetail);

export default movieRouter;
