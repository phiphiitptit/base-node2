import express from "express";
import { addAddressPost, deleteAddressPost, getAddressPost, getAllAddressPost, updateAddressPost } from "../controller/AddressController.js";

const router = express.Router();

router
  .route("/")
  .post(addAddressPost)
  .get(getAllAddressPost)
  .patch(updateAddressPost)
  .delete(deleteAddressPost);

router.route("/:id").get(getAddressPost);

export default router;
