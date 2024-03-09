import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    chats: [
      {
        type: Schema.Types.ObjectId,
        ref: "Chat"
      },
    ],
    isPremiumUser: {
      type: Boolean,
      default: false
    },
    availableTokens: {
      type: Number,
      default: 5
    }
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
