import mongoose, { trusted } from "mongoose";

const hostelApplicationStructure = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const hostelApplicationModel = mongoose.model(
  "user",
  hostelApplicationStructure
);
export default hostelApplicationModel;
