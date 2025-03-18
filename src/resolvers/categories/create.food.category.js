import { foodCategories } from "../../models/foodCategory.schema.js";

export const createFoodCategory = async (req, res) => {
  try {
    const categoryName = req.body;
    const newCategory = await foodCategories.create(
      categoryName
    );
    res.json({ message: "Category created", category: newCategory });
  } catch (error) {
    console.log(error);
  }
};
