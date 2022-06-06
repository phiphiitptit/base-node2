import express from "express";
import {
  addIntro,
  deleteIntro,
  getAllIntro,
  getIntro,
  updateIntro,
} from "../controller/introController.js";

const router = express.Router();

router
  .route("/")
  .post(addIntro)
  .get(getAllIntro)
  .patch(updateIntro)
  .delete(deleteIntro);

router.route("/:id").get(getIntro);

export default router;
