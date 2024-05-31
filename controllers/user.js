const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const nodemailer = require('nodemailer');
// const { config } = require('dotenv');
const dotenv=require('dotenv')
// const _ = require('lodash');
dotenv.config();

const buyerSignup = async (req, res) => {
    try {
        const { name, email, password, role = "buyer" } = req.body;

        // Check if a user with the same email and role already exists
        const existingUser = await User.findOne({ email, role });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password, role });
        await newUser.save();

        res.status(201).json({ message: "Account is successfully created" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const adminSignup = async (req, res) => {
    try {
        const { name, email, password, role = "admin" } = req.body;

        // Check if a user with the same email and role already exists
        const existingUser = await User.findOne({ email, role });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password, role });
        await newUser.save();

        res.status(201).json({ message: "Account is successfully created" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const investerSignup = async (req, res) => {
    try {
        const { name, email, password, role = "investor" } = req.body;

        // Check if a user with the same email and role already exists
        const existingUser = await User.findOne({ email, role });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: "Account is successfully created" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const adminLogin = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Find user by email and role
        const user = await User.findOne({ email, role: "admin" });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // const matchPassword = password==user.password

        if (password!=user.password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, "secretKey");
        let userId = user._id;
        res.json({ token, userId, message: "User logged in successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const BuyerLogin = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Find user by email and role
        const user = await User.findOne({ email, role: "buyer" });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // const matchPassword = await bcrypt.compare(password, user.password);

        if (password!=user.password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, "secretKey");
        let userId = user._id;
        res.json({ token, userId, message: "User logged in successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const investerLogin = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Find user by email and role
        const user = await User.findOne({ email, role: "investor" });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // const matchPassword = await bcrypt.compare(password, user.password);

        if (password!=user.password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, "secretKey");
        let userId = user._id;
        res.json({ token, userId, message: "User logged in successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 }); 
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

// const forgotPassword=async(req,res)=>{
//     try {
//          const {email}=req.body
        
//      const  transporter= nodemailer.createTransport({
            
//             secure: "gmail",
//             auth: {
//               user: "username",
//               pass: "password",
//             },
//           });
         

//     } catch (error) {
        
//     }
// }



const forgotPassword = async (req, res) => {
  const { email } = req.body;

  // Validate email
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });

  }


  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: 'User is not registered' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "wdeveloper969@gmail.com", // Your Gmail address
      pass: "ztbt xupc reba tpog", // Your Gmail password or App Password
    },
    connectionTimeout: 90000, // Increase timeout to 20 seconds
  socketTimeout: 90000
  });

  const mailOptions = {
    from: "wdeveloper969@gmail.com",
    to: email,
    subject: 'Password Reset Request',
    text: `your Password is  ${user.password}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
};


const  deletUser=async(req,res)=>{
    const {userId}=req.params
    const userExist=await User.findOne(userId)

    if(!userExist){
        res.json({message:"User is not Exist"})

    }

    await userExist.findByIdAndDelete(userId)
    res.json({message:"user deleted sucessfully"})

}



module.exports = { buyerSignup, adminSignup, investerSignup, BuyerLogin, adminLogin, investerLogin,getAllUser,forgotPassword };



