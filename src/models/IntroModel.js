import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["gioithieu", "sumenh", "giatri", "tamnhin"],
    },
    description: {
      type: String,
      required: true,
    },
    created_by: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("hawaco");

const IntroModel = myDB.model("Intro", UserSchema, "intro");

export default IntroModel;
