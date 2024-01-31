
const { model } = require('mongoose');
const UserModel = require('../models/user.models');
const bcrypt = require('bcrypt');
const errorHandler = require('../error/errorHandler');
require('dotenv').config();
const jwt = require('jsonwebtoken');

var sendEmail= require('../middleWares/sendEmail');


// const generateRandomPassword = require('../middleWares/generatePassword');



// signing up a user
const SignUp = async (req, res, next) => {

    const { fullName, email, password, bloodGroup } = req.body;


    try {
        var userExists = await UserModel.findOne({ email: email });
        console.log(userExists);
        if (userExists) {
            res.status(401).json({ message: "User with this email already exists"});
        } else {
            const hashedPassword = bcrypt.hashSync(password, 10);
            var newUser = new UserModel({
                fullName: fullName,
                email: email,
                password: hashedPassword,
                fullName: fullName,
                role: "User",
                bloodGroup: bloodGroup,
                password: hashedPassword
                

            });
            var savedUser = await newUser.save();
            res.status(201).json({ message: 'Account created!'});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};






const SignIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await UserModel.findOne({ email: email});
        console.log('validUser:', validUser);

        if (!validUser) return res.status(500).json({ message: "Wrong password or email!" });
        const validPassword = bcrypt.compareSync(password, validUser.password);


        if (!validPassword) return res.status(500).json({ message: "Wrong password or email!" });

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
        const { password: hashedPassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000);
        res
            .cookie('access_token', token, { httpOnly: true, expires: expiryDate})
            .status(200)
            .json(rest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const generateRandomPassword = () => {
    const length = 10;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  };







const ForgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await UserModel.findOne({ email: email});
        if (!user) {
            return res.status(404).json({ message: "User does not exist" });
        }

        const newPassword = await generateRandomPassword();
        const hashPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashPassword;
        const updatedUser = await user.save();

        await sendEmail(updatedUser.email,newPassword);


        return res.status(201).json({ message: "Password updated, check your email for the new password" });
    } catch (error) {
        // Handle errors here
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
const SendFeedback = async (req, res, next) => {
    const { existingEmail, feedbackMessage } = req.body;

    try {


        const feedbackSubject = "Feedback from user";
        const feedbackEmailMessage = `You have received feedback from BloodLink user:\n\n${feedbackMessage}`;
        
        await sendEmail(existingEmail, feedbackSubject, feedbackEmailMessage);

        res.status(200).json({ message: "Feedback sent successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Failed to send feedback, please try again later" });
    }

};


const findUserById = async (userId) => {
    try {
        const user = await UserModel.findById(userId);
        return user; // If user is found, it will be returned, otherwise null
    } catch (error) {
        console.error('Error finding user by ID:', error);
        throw error; // Throw the error to handle it in the calling code
    }
};

const SignOut = async (req, res) => {
        try {
            
            res.clearCookie('access_token').sendStatus(200);
        } catch (error) {
            res.status(500).json({ message: "Failed to sign out, please try again later" });
        }
    };
        






module.exports = {
    SignIn,
    SignUp,
    SignOut,
    ForgotPassword,
    findUserById,
    SendFeedback
}
