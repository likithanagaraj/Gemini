import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

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
    Responses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Response",
      },
    ],
    isPremiumUser: {
      type: Boolean,
      default: false,
    },
    availableTokens: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

export const User = model("User", userSchema);
