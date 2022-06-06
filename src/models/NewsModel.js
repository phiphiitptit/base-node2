import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const NewsSchema = new mongoose.Schema(
  {
    img: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    description: {
      type: String,
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

const NewsModel = myDB.model("News", NewsSchema, "news");

export default NewsModel;
