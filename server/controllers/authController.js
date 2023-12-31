import { comparePassword, hashedPassword } from "../helpers/authHelper.js";
import { UserDetails } from "../models/userDetails.js";
import { createJwtToken } from "../utils/createJwtToken.js";

export const registerUser = async (req, res) => {
  const { name, email, role, password } = req.body;

  if (!name || !email || !role || !password) {
    return res.send({
      error: "Please provide all required fields.",
      missingFields: {
        name: name|| "undefined",
        email: email|| "undefined",
        role: role || "undefined",
        password: password|| "undefined",
      },
    });
  }

  try {
    const userExistOrNot = await UserDetails.findOne({ email: email });
    if (userExistOrNot)
      return res.status(403).send({
        success: false,
        message: "User account already exist",
      });

    const securedPass = await hashedPassword(password);
    const newUser = new UserDetails({ name, email, role, password: securedPass });

    // console.log(userWithToken)

    await newUser.save();

    const userToken = await createJwtToken(newUser);
    const userWithToken = { ...newUser, token: userToken };

    // console.log(userToken);

    // const userDetail = { ...newUser, token: userToken };

    const { name: userName, email: userEmail , role:userRole } = userWithToken._doc;
    const { token } = userWithToken;

    const sharedUserDetails = { userName, userEmail,userRole,token };

    res.status(200).send({
      success: true,
      user: sharedUserDetails,
    });
  } catch (error) {
    return res.status(500).send({
      success: false, 
      message: "Error while registering the user",
      error: error,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send({
      error: "Please provide all required fields.",
      missingFields: {
        email: email|| "undefined",
        password: password|| "undefined",
      },
    });
  }

  try {
    const userExistOrNot = await UserDetails.findOne({ email: email });
    if (!userExistOrNot)
      return res.status(403).send({
        success: false,
        message: "User noty exist",
      });

    const passworkCheck = await comparePassword(
      password,
      userExistOrNot.password
    );
    if (!passworkCheck) {
      return res.status(500).send({
        success: false,
        message: "Wrong Credentials",
      });
    }

    // const userToken = await createJwtToken(userExistOrNot);
    // const userWithToken = { ...userExistOrNot, token: userToken };

    // const { name: userName, email: userEmail, _id: userId , role: userRole } = userWithToken._doc;
    // const { token } = userWithToken;

    

    // const sharedUserDetails = { userId,userName, userEmail, userRole, token };

    res.status(200).send({
      success: true,
      message:"Logged in successfully",
      user: userExistOrNot,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while registering the user",
      error: error,
    });
  }
};