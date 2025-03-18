import { foodOrder } from "../../models/food.order.schema.js";

export const addFoodOrder = async (req, res) => {
  const { totalPrice, user } = req.body;
  try {
    const newFoodOrder = await foodOrder.create({
      totalPrice, user
    });
    res.json({ massage: "succesfuly added order", foodOrder: newFoodOrder });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
    console.log(err);
    
  }
};
