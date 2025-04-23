import usermodels from "../dbmodel/usermodel.js";
import bycrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const createtoken=(id)=>{
  return  jwt.sign({id}, process.env.jwt_token)
}
// Sign-up function
const sign = async (req, res) => {



  try {
    const { fullname, username, password, confirmpassword, gmail, gender } = req.body;

    // Check if all required fields are provided
    if (!fullname || !username || !password || !confirmpassword || !gmail || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if passwords match
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Password and Confirm Password do not match" });
    }

    // Check if user already exists
    const existingUser = await usermodels.findOne({ gmail });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }
    //  password bycrypt
    const hashpass = await bycrypt.hash(password,10)

    // Create a new user
    const userd= await usermodels.create({
      fullname,
      username,
      password:hashpass,
      gmail,
      gender,
    });
 
    const userdb=await userd.save()
    const token = createtoken(userdb.id)
    return res.status(201).json({ message: "Account created successfully",token });

  } catch (error) {
    console.error("Error in sign-up:", error);
    return res.status(500).json({ message: "Internal server error"});
  }
};

// Login function
const login = async (req, res) => {
  try {
    const { gmail, password } = req.body;

    if (!gmail || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find user by email
    const userdata = await usermodels.findOne({ gmail });
    if (!userdata) {
      return res.status(404).json({ message: "User does not exist" });
    }

    // Compare the entered password with the hashed password
    const passMatch = await bycrypt.compare(password, userdata.password);
    if (!passMatch) {
      const token = createtoken(userdata.id)

      res.status(200).json({ message: "Login successful", token });
    } else{
      res.status(400).json({ message: "Incorrect password" });
    }

  } catch (error) {
    console.error("Error in login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Admin function (empty for now)
const admin = async (req, res) => {

 const {gmail,password}=req.body
 if (gmail==process.env.admin_id &&password==process.env.admin_pass) {
  const token =jwt.sign(gmail+password,process.env.jwt_token)
   res.json({success:true,token})
} else {
   res.json({ success:false,message:"pass and id doesn't match",})

  
 }


};

export { login, sign, admin };
