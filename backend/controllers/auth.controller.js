const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const generateTokenAndSetCookie  = require('../utils/generateToken');



const signup = async (req, res, next)=>{
    console.log(req.body);
    try{
        const { name, gender, username, password, confirmPassword } = req.body;

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
        }else{
            profilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        }

        const newUser = new User({
            name,
            username,
            password: hashedpassword,
            gender,
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
            console.log("User signup success");
        }
        else{
            res.status(400).json({ error: "Invalid User data" });
        }
    }catch(error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const login = async (req, res, next)=>{
    console.log(req.data);
    try{
        const {username, password, rememberMe} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user && !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id, rememberMe, res);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            profilePic: user.profilePic
        });
        console.log("Login Done");

    }catch(error){
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Login process end");
};

const logout = (req, res, next)=>{
    try{
        res.cookie("jwt", "", {maxAge: 0});
        res.status(500).json({message: "logged out successfully"});
    }catch(error){
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    signup,
    login,
    logout
};