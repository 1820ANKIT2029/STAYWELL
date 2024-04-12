const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');

const connectToMongoDB = require('./db/ConnectMongoDB');

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.use('/', require('./routes/home.routes')); // Home page router
app.use('/auth', require('./routes/auth.routes'));  // auth api router
app.use('/search', require('./routes/search.routes')); // search api router

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`listening on port ${PORT}`);
});
