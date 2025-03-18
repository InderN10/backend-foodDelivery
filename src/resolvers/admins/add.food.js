import { Foods } from "../../models/food.schema.js";

export const addFood = async (req, res) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const newFood = await Foods.create({
      foodName,
      price,
      image,
      ingredients,
      category
    });
    res.json({ massage: "succesfuly added food", food: newFood });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
    console.log(err);
    
  }
};

