import express from "express";
import { addCompany, deleteCompany, getAllCompany, getCompany, updateCompany } from "../controller/CompanyController.js";

const router = express.Router();

router
  .route("/")
  .post(addCompany)
  .get(getAllCompany)
  .patch(updateCompany)
  .delete(deleteCompany);

router.route("/:id").get(getCompany);

export default router;
