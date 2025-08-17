import express from "express";
import { createCourse } from "../controller/course.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/").post(isAuthenticated, createCourse);

export default router;
