import CompanyModel from "../models/CompanyModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  readOne,
  updateOne
} from "./crudFunction.js";


export const addCompany = createOne(CompanyModel);
export const getCompany = readOne(CompanyModel);
export const getAllCompany = getAll(CompanyModel);
export const updateCompany = updateOne(CompanyModel);
export const deleteCompany = deleteOne(CompanyModel);