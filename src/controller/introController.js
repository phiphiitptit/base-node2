import IntroModel from "../models/IntroModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  readOne,
  updateOne,
} from "./crudFunction.js";

export const addIntro = createOne(IntroModel);
export const getIntro = readOne(IntroModel);

export const getAllIntro = getAll(IntroModel);
export const updateIntro = updateOne(IntroModel);
export const deleteIntro = deleteOne(IntroModel);
