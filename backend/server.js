const express = require("express");
const dotenv = require("dotenv");
const connectToMongoDB = require('./db/ConnectMongoDB');

const app = express();

dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use('/', require('./routes/home.routes')); // Home page router
app.use('/auth', require('./routes/auth.routes'));  // auth page router

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`listening on port ${PORT}`);
});