import mongoose from "mongoose";

const { Schema} = mongoose;

const foodSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId },
    foodName: { type: String },
    price: { type: Number },
    image: { type: String },
    ingredients: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "foodCategories" },
    address: String,
  },
  {
    timestamps: true,
  }
);

export const Foods = mongoose.model("Foods", foodSchema);
