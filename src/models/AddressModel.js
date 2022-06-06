import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const AddressSchema = new mongoose.Schema(
  {
    address_select: {
      type: String,
      required: true,
      enum: ["addressmain", "addressbranch"],
    },
    main_address: {
      type: String,
      required: true,
    },
    fax: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("hawaco");

const AddressModel = myDB.model("Address", AddressSchema, "address");

export default AddressModel;
