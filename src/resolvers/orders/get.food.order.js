import { foodOrder } from "../../models/food.order.schema.js";

export const getOrder = async (req, res) => {
  const { _id } = req.body;
  try {
    const orders = await foodOrder.findById(_id).populate("user");
    if (!orders) {
      return res.status(404).json({ message: "orders not found" });
    }
    res.json({ orders });
  } catch (err) {
    console.error(err);
    res
      .status(404)
      .json({ message: "An error occurred while getting the order" });
  }
};