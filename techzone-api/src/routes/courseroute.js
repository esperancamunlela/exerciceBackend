import express from "express";
import { getAllCursos, getCurso, createCourse, deleteCourse } from "../controllers/courses-controllers.js";

const courseRoute = express.Router();

courseRoute.get("/", getAllCursos);
courseRoute.get("/:id", getCurso);
courseRoute.post("/", createCourse);
courseRoute.delete("/:id", deleteCourse);

export default courseRoute;