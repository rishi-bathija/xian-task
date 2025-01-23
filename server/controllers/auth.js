const User = require("../models/User");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        // fetch data from req body
        const { firstName,
            lastName,
            email,
            password,
            confirmPassword,
            contactNo,
            whatsappNo,
            state,
            referralCode,
        } = req.body;

        // validate the data
        if (!firstName || !lastName || !email || !password || !confirmPassword || !contactNo || !whatsappNo || !state || !referralCode) {
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            })
        }

        // match the password and confirm password
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and ConfirmPassword fields do not match",
            })
        }

        // check if user already exist in db
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            })
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = await User.create({
            firstName,
            lastName,
            contactNo,
            whatsappNo,
            email,
            password: hashedPassword,
            state,
            referralCode,
        })

        // return res
        return res.status(200).json({
            success: true,
            message: "User registered successsfully",
            user,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again",
        })
    }
}
exports.login = async (req, res) => {
    try {
        // get data from req body
        const { email, password } = req.body;

        // validate data
        if (!email || !password) {
            return res.status(401).json({
                success: false,
                message: "All fields are required",
            })
        }

        // check if user exist or not
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered, please signup first",
            })
        }

        // generate jwt token, after password mattching
        if (await bcrypt.compare(password, user.password)) {
            const payload = { user: { id: user.id } };
            const token = JWT.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" });

            return res.status(200).json({
                success: true,
                message: "User logged in successfully",
                token,
            })
        }
        else {
            return res.status(401).json({
                success: false,
                message: "Password incorrect",
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to login, please try again",
        })
    }
}