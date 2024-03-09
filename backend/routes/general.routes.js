import express, { response } from "express";
import { getDataFromGemini } from "../controllers/user.controller.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const router = express.Router();

const verifyToken = (token) =>{
	const details = jwt.verify(token, process.env.JWT_SECRET_TEXT)
	return details
}

router.route("/").get((req, res) => {
  res.send("API working fine✅✅");
});

router.route("/register").post(async (req, res) => {

	// const {authorization} = req.headers
	// if(authorization){
	// 	verifyToken(authorization.split(" ")[1])
	// }

  const { email, password } = req.body;
  
  console.log(email, password);
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Email or password missing in body" });
    return;
  }

  const foundEmail = await User.findOne({email});

  if (foundEmail) {
    res.status(400).json({ success: false, message: `Email ${email} already exists`});
    return;
  }

  const newUser = await User.create({ email, password });

  const payload = {
    email: newUser.email,
    __id: newUser.id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_TEXT);

  res
    .status(201)
    .json({
      success: true,
      message: `Successfully create ${email}`,
      token: token,
    });
});

router.route("/generate").post(async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    res
      .status(400)
      .json({
        success: false,
        message: "Prompt required to generate response",
      });
    return;
  }

  const response = await getDataFromGemini(prompt);

  res.status(200).json({ success: true, AIResponse: response });
});

export default router;
