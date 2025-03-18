import { Foods } from "../../models/food.schema.js";

export const UpdateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const { foodName, price, image, ingredients, category } = req.body;
    if (id) {
      const updateFood = await Foods.findByIdAndUpdate(id, {
        foodName,
        price,
        image,
        ingredients,
        category,
      });
      res.json({
        message: "Food updated successfully",
        category: updateFood,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({ message: "Error occured" });
  }
};
