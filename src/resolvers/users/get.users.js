import { Users } from "../../models/user.schema.js";

export const getUserRegisterById = async (req, res) => {
 const { _id } = req.body;
  try {
    const users = await Users.findById(_id);
    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ users });
  } catch (err) {
    console.error(err);
    res
      .status(404)
      .json({ message: "An error occurred while getting the user" });
  }
};
