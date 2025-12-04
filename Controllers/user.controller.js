import User from "../Models/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// REGISTER USER
export const registeruser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = new User({
            username,
            email,
            password: hashPassword
        });

        await newUser.save();

        return res.status(200).json({
            message: "User registered successfully",
            data: newUser
        });

    } catch (error) {
        console.log("REGISTER ERROR:", error);
        return res.status(500).json({
            message: "User not registered. Error in register user"
        });
    }
};

// LOGIN USER
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userDetail = await User.findOne({ email });
        if (!userDetail) {
            return res.status(404).json({ message: "Invalid Email" });
        }

        const passwordMatch = await bcrypt.compare(password, userDetail.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Create JWT token
        const token = jwt.sign(
            { id: userDetail._id, email: userDetail.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // NO NEED to save token in DB

        return res.status(200).json({
            message: "User Login Successfully",
            token
        });

    } catch (error) {
        console.log("LOGIN ERROR:", error);
        return res.status(500).json({
            message: "User not Logged In. Error in Login user"
        });
    }
};

//Get User Details

export const getUserDetails = async (req, res) => {
    try {
        return res.status(200).json({
            message: "User fetched successfully",
            user: req.user
        });
    } catch (error) {
        console.log("GET USER ERROR:", error);
        return res.status(500).json({ message: "Failed to fetch user" });
    }
};
