import { GoogleGenerativeAI } from "@google/generative-ai";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { Response } from "../models/response.model.js";

const verifyUserJWT = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const token = authorization.split(" ")[1];
    const isVerified = jwt.verify(token, process.env.JWT_SECRET_TEXT);
    // console.log(isVerified.__id);
    req.userId = isVerified.__id;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

const checkAPIWorking = (req, res) => {
  res.send("API working fine✅✅");
};
const checkAuthStatus = (req, res) => {
  res.send("Authenticated with valid token");
};

const generateFromAi = async (req, res) => {
  const { prompt } = req.body;

  // return res.status(200).json({ success: true, AIResponse: "working" });
  if (!prompt) {
    res.status(400).json({
      success: false,
      message: "Prompt required to generate response",
    });
    return;
  }

  // Decrease one token and check if tokens == 0

  try {
    const userDetails = await User.findById(req.userId);

    if (userDetails.availableTokens > 0) {
      const response = await getDataFromGemini(prompt);
      const foundUser = await User.findByIdAndUpdate(req.userId, {
        $inc: { availableTokens: -1 },
      });

      // saving the data in data base `Response` model
      await Response.create({userId: req.userId, data: response})

      // Return data to user
      return res
        .status(200)
        .json({
          success: true,
          AIResponse: response,
          availableTokens: foundUser.availableTokens - 1,
        });
    } else {
      return res
        .status(405)
        .json({ success: false, message: "No more available tokens." });
    }

  } catch (error) {
    console.log(error);
  }
};

async function getDataFromGemini(prompt) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text; // Return the text as the resolved value of the promise
  } catch (error) {
    console.error("Error fetching data from Gemini:", error);
    throw error; // Re-throw the error to propagate it up the call chain
  }
}

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Email or password missing in body" });
    return;
  }

  const foundEmail = await User.findOne({ email });

  if (foundEmail) {
    res
      .status(400)
      .json({ success: false, message: `Email ${email} already exists` });
    return;
  }

  const newUser = await User.create({ email, password });

  const payload = {
    email: newUser.email,
    __id: newUser.id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_TEXT);

  res.status(201).json({
    success: true,
    message: `Successfully create ${email}`,
    token: token,
  });
};

const loginUser = async (req, res) => {
  // S4: if `yes` then generate token and return
  // S5: if `no` then return no such user found

  // S1: extract [email, password]
  const { email, password } = req.body;

  // S2: Validate if available [email, password]
  console.log(email, password);
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Email or password missing in body" });
    return;
  }

  // S3: find in db if such user exist and if they match with credentials
  const foundEmail = await User.findOne({ email });

  if (!foundEmail) {
    res
      .status(400)
      .json({ success: false, message: `NO such email found ${email}}` });
    return;
  }

  const isPasswordCorrect = await bcrypt.compare(password, foundEmail.password);

  console.log(isPasswordCorrect);
  if (!isPasswordCorrect) {
    res.status(400).json({ success: false, message: `Invalid password` });
    return;
  }

  const payload = {
    email: foundEmail.email,
    __id: foundEmail.id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_TEXT);

  res.status(201).json({
    success: true,
    message: `Logged In succefully ${email}`,
    token: token,
  });
};

export {
  registerUser,
  loginUser,
  verifyUserJWT,
  checkAPIWorking,
  checkAuthStatus,
  generateFromAi,
};
