import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const CompanySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    short_name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("hawaco");

const CompanyModel = myDB.model("Company", CompanySchema, "company");

export default CompanyModel;
