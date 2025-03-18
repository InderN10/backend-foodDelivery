import mongoose, { SchemaType } from "mongoose";

const { Schema, model, models } = mongoose;

const foodOrderSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId },
    totalPrice: { type: Number },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    user: { type: Schema.Types.ObjectId, ref: "Users" },
    foodOrderItems: [
      { type: Schema.Types.ObjectId, ref: "Foods", quantity: Number },
    ],
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

export const foodOrder = mongoose.model("foodOrder", foodOrderSchema);
