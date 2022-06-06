import express from "express";

import {
  addUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router
  .route("/")
  .post(addUser)
  .get(getAllUser)
  .patch(updateUser)
  .delete(deleteUser);

router.route("/:id").get(getUser);

export default router;
