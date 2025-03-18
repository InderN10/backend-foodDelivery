import { foodCategories } from "../../models/foodCategory.schema.js";

export const getAllCategories = async (req, res) => {
  //   const user = await Users.findById(req.params.id).populate("user");
  //   req.json({ user });
  try {
    const { categoryName } = req.body;
    if (!categoryName) {
      const allCategories = await foodCategories.find();
      return res.status(200).json({ categories: allCategories });
    }
  } catch (err) {
    console.log(err);
  }
};
