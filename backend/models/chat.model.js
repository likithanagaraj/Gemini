import { Schema, model } from "mongoose";

const chatSchema = Schema({
  email: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  data: {
    type: String,
    required: true
  }
}, {timestampts: true})

export const Chat = model("Chat", chatSchema)