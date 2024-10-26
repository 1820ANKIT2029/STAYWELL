const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (userId, rememberMe, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: rememberMe?'30d':'1d',
    });

    res.cookie('jwt', token, {
        maxAge: rememberMe?30*24*60*60*1000:1*24*60*60*1000,
        httpOnly: true,
        sameSite: "None"
    });
};

module.exports = generateTokenAndSetCookie;