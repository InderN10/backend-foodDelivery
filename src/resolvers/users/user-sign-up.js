import { Users } from "../../models/user.schema.js";

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};


const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\d{8}$/; 
  return phoneRegex.test(phoneNumber);
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const userSignUp = async (req, res) => {
  const { phoneNumber, password, email, address } = req.body;


  if (!email || !password || !phoneNumber) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (!validatePhoneNumber(phoneNumber)) {
    return res
      .status(400)
      .json({ message: "Invalid phone number format. Must be 10 digits." });
  }

  if (!validatePassword(password)) {
    return res
      .status(400)
      .json({
        message:
          "Password must be at least 8 characters, contain one uppercase letter, one lowercase letter, and one number.",
      });
  }

  try {
    const newUser = await Users.create({
      email,
      password,
      phoneNumber,
      address,
    });
    res.json({ message: "Successfully created account", user: newUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the account" });
  }
};
