import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const foodCategorySchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  categoryName: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const foodCategories = mongoose.model("foodCategories", foodCategorySchema);
