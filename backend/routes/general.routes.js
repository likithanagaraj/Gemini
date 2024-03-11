import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { Response } from "../models/response.model.js";

import {
  checkAPIWorking,
  checkAuthStatus,
  generateFromAi,
  loginUser,
  registerUser,
  verifyUserJWT,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/responses").get(verifyUserJWT, async (req, res) => {
  try {
    // await User.findById(req.userId).populate('responses').then(allResponses=>{

    const rawResponse = await Response.find({ userId: req.userId });
    console.log(rawResponse);

    const finalResponses = rawResponse.map((eachResponse) => {
      return eachResponse.data;
    });
    console.log(finalResponses);

    // await Response.populate(userResponse, { path: "userId" });

    return res.status(200).json({
      success: true,
      AllResponses: finalResponses,
    });
  } catch (error) {
    console.log(error);
  }
});

router.route("/").get(checkAPIWorking);
router.route("/auth-status").get(verifyUserJWT, checkAuthStatus);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/generate").post(verifyUserJWT, generateFromAi);

router.route("/upgrade").post(verifyUserJWT, (req, res)=>{


  let isPaymentDone = true
  // Put your logic to verify that payment is done then this will proceed
  if(!isPaymentDone){
    // write the logic
    return
  }

  const updateUser = User.findByIdAndUpdate(req.userId, {
    $inc:{ availableTokens: +20 },
    // isPremium: true
  })
  
  console.log(updateUser)

});


export default router;
