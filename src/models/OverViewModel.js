import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const OverViewSchema = new mongoose.Schema(
  {
    company_english: {
      type: String,
      required: true,
    },
    company_vietnamese: {
      type: String,
      required: true,
    },
    short_name: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    scope: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    description: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("hawaco");

const OverViewModel = myDB.model("Overview", OverViewSchema, "overview");

export default OverViewModel;
