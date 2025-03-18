import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  email: { type: String },
  password: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  // orderedFoods: { type: ObjectId },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER"
  },
  isVerified: { type: Boolean },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  address: String,
});

export const Users = mongoose.model("Users", userSchema);
