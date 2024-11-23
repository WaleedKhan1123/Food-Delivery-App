import mongoose from "mongoose";

export const connection = async () => {
  const url =
    "mongodb+srv://waleedkn270:waleedkh11@hostelapplicants.fjqdy.mongodb.net/KHANBITES?retryWrites=true&w=majority&appName=HostelApplicants";

  try {
    await mongoose.connect(url).then(() => {
      console.log("Connected to the database");
    });

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const dataArray = await fetched_data.find({}).toArray();

    // console.log(dataArray);
  } catch (err) {
    console.error("Database Connection Error: ", err);
  }
};
