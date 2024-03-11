import { Schema, model } from "mongoose";

const responseSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  data: {
    type: String,
    required: true
  }
}, {timestampts: true})

export const Response = model("Response", responseSchema)