import express from "express";
import { getAllCursos, getCurso, createCourse, deleteCourse, updateCourse } from "../controllers/courses-controllers.js";

const courseRoute = express.Router();

courseRoute.get("/", getAllCursos);
courseRoute.get("/:id", getCurso);
courseRoute.post("/", createCourse);
courseRoute.delete("/:id", deleteCourse);
courseRoute.put("/:id",updateCourse)

export default courseRoute;