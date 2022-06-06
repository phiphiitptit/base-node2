import express from "express";
import { Authentication } from "../controller/LoginController.js";

const router = express.Router();

router.route("/").post(Authentication);

export default router;
