import { foodCategories } from "../../models/foodCategory.schema.js";

export const deleteFoodCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const deletedCategory = await foodCategories.deleteOne({categoryName});
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    } else {
      res.status(200).json({ message: "Category deleted" });
    }
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "Error occured", err });
  }
};
