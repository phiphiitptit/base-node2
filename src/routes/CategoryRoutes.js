import express from "express";
import { addCategoryPost, deleteCategoryPost, getAllCategoryPost, getCategoryPost, updateCategoryPost } from "../controller/CategoryController.js";

const router = express.Router();

router
  .route("/")
  .post(addCategoryPost)
  .get(getAllCategoryPost)
  .patch(updateCategoryPost)
  .delete(deleteCategoryPost);

router.route("/:id").get(getCategoryPost);

export default router;
