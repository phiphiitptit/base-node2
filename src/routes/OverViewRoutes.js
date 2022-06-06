import express from "express";
import { addOverViewPost, deleteOverViewPost, getAllOverViewPost, getOverViewPost, updateOverViewPost } from "../controller/OverViewController.js";

const router = express.Router();

router
  .route("/")
  .post(addOverViewPost)
  .get(getAllOverViewPost)
  .patch(updateOverViewPost)
  .delete(deleteOverViewPost);

router.route("/:id").get(getOverViewPost);

export default router;
