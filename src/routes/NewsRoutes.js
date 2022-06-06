import express from "express";
import {
  addNews,
  deleteNewsPost,
  getAllNewsPost,
  getNewsPost,
  updateNewsPost,
} from "../controller/NewsController.js";

import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router
  .route("/")
  .post(addNews)
  .get(getAllNewsPost)
  .patch(updateNewsPost)
  .delete(deleteNewsPost);

router.route("/:id").get(getNewsPost);

export default router;
