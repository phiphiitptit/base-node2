import mongoose from "mongoose";
import UserModel from "../models/User.js";
import User from "../models/User.js";
import {
  createOne,
  deleteOne,
  getAll,
  readOne,
  updateOne,
} from "./crudFunction.js";

// export const addUser = async(req,res)=>{

//         const user = new User({
//                 _id: mongoose.Types.ObjectId(),
//                 username: req.body.username,
//                 pwd: req.body.pwd,
//                 name: req.body.name,
//                 email: req.body.email,
//         })

//         return user.save().then((newUser)=>{
//                 return res.status(200).json({
//                         success:true,
//                         mes: "Create User succesfull",
//                         user:newUser,
//                 })

//         })
//         .catch((err)=>{
//                 console.log(err);
//                 res.status(400).json({
//                         success:false,
//                         mes:"Fail to create",
//                 })
//         })
// }

// export const getAllUser = async( req, res) =>{
//         User.find()
//           .select('_id username pwd name email')
//           .then((allUser) => {
//             return res.status(200).json({
//               success: true,
//               message: 'A list of all user',
//               list_user: allUser,
//             });
//           })
//           .catch((err) => {
//             res.status(500).json({
//               success: false,
//               message: 'Server error. Please try again.',
//               error: err.message,
//             });
//           });
//       }

export const addUser = createOne(UserModel);
export const getUser = readOne(UserModel);

export const getAllUser = getAll(UserModel);
export const updateUser = updateOne(UserModel);
export const deleteUser = deleteOne(UserModel);

