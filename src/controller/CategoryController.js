import CategoryModel from "../models/CategoryModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  readOne,
  updateOne
} from "./crudFunction.js";


export const addCategoryPost = createOne(CategoryModel);
export const getCategoryPost = readOne(CategoryModel);
export const getAllCategoryPost = getAll(CategoryModel);
export const updateCategoryPost = updateOne(CategoryModel);
export const deleteCategoryPost = deleteOne(CategoryModel);