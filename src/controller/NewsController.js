import NewsModel from "../models/NewsModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  readOne,
  updateOne
} from "./crudFunction.js";

// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");

import multer  from "multer";



export const addNewsPost = createOne(NewsModel);
export const getNewsPost = readOne(NewsModel);
export const getAllNewsPost = getAll(NewsModel);
export const updateNewsPost = updateOne(NewsModel);
export const deleteNewsPost = deleteOne(NewsModel);

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
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'|| file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


export const addNews = async (req,res,next)=>{
  try {
    // console.log(req.body);
    const data = req.body;
    var productImage = req.body.img;
    await upload.single(productImage);
    
    const doc = await NewsModel.create(data);
      res.status(200).json({
        status: "Hawaco Success",
        data: {
          data: doc,
        },
      });
      req.body._id = doc._id;

    next()
  } catch (e) {
     // console.log("Error when call API", err);
     res.status(400).json({
      status: "Hawaco Bad request",
      data: e.message,
    });
  }
  
}