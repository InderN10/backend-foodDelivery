import { Foods } from "../../models/food.schema.js";

export const getFoods = async (req, res) => {
  const { _id } = req.body;
  try {
    const foods = await Foods.findById(_id).populate("category");
    if (!foods) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json({ foods });
  } catch (err) {
    console.error(err);
    res
      .status(404)
      .json({ message: "An error occurred while getting the food" });
  }
};
