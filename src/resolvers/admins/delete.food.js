import { Foods } from "../../models/food.schema.js";

export const deleteFood = async (req, res) => {
  const { _id } = req.body;
  try {
    const deletedFood = await Foods.findByIdAndDelete({ _id });
    if (!deletedFood) {
      return res.status(404).json({ message: "food not found" });
    } else {
      res.status(200).json({ message: "food deleted" });
    }
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "Error occured", err });
  }
};