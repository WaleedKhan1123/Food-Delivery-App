import express from "express";
import CreateUser from "../model/user.js";
const route = express.Router();

route.post("/createUser", async (req, res) => {
  const newUser = new CreateUser({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    location: req.body.location,
  });

  try {
    await newUser.save();
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

export default route;
