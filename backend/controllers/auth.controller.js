const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const generateTokenAndSetCookie  = require('../utils/generateToken');

const signup = async (req, res, next)=>{
    try{
        const { name, username, password, confirmPassword, gender, phoneNo, email } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error: "Password don't match"});
        }

        const user = await User.findOne({username});
        if(user){
            return res.send(400).json({error: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        // https://avatar.iran.liara.run/public  for profile pic
        let profilePic;
        if(gender == 'male'){
            profilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        }else if (gender == 'female') {
            profilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        } else {
            profilePic = `https://avatar.iran.liara.run/public/?username=${username}`;
        }

        const newUser = new User({
            name,
            username,
            password: hashedpassword,
            gender,
            phoneNo,
            email,
            profilePic
        });
        if(newUser){
            generateTokenAndSetCookie(newUser._id, res); // token
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                username: newUser.username,
                profilepic: newUser.profilepic
            });
        }
        else{
            res.status(400).json({ error: "Invalid User data" });
        }
    }catch(error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("signup user");
};

const login = (req, res, next)=>{
    console.log("login user");
    res.send("hii");
};

const logout = (req, res, next)=>{
    console.log("login user");
    
};

module.exports = {
    signup,
    login,
    logout
};