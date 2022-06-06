import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      
    },
    short_description: {
      type: String,
      required: true,
    },
    long_description: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("hawaco");

const CategoryModel = myDB.model("Category", CategorySchema, "category");

export default CategoryModel;
