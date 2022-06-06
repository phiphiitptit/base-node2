import AddressModel from "../models/AddressModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  readOne,
  updateOne
} from "./crudFunction.js";


export const addAddressPost = createOne(AddressModel);
export const getAddressPost = readOne(AddressModel);
export const getAllAddressPost = getAll(AddressModel);
export const updateAddressPost = updateOne(AddressModel);
export const deleteAddressPost = deleteOne(AddressModel);