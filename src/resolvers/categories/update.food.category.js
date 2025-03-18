import { foodCategories } from "../../models/foodCategory.schema.js";

export const UpdateFoodCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName } = req.body;
    if (id) {
      const updateCategory = await foodCategories.findByIdAndUpdate(id, {
        categoryName,
      });
      res.json({
        message: "Category updated successfully",
        category: updateCategory,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({ message: "Error occured" });
  }
};
