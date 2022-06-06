import OverViewModel from "../models/OverViewModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  readOne,
  updateOne
} from "./crudFunction.js";


export const addOverViewPost = createOne(OverViewModel);
export const getOverViewPost = readOne(OverViewModel);
export const getAllOverViewPost = getAll(OverViewModel);
export const updateOverViewPost = updateOne(OverViewModel);
export const deleteOverViewPost = deleteOne(OverViewModel);