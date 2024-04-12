const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/location', (req, res, next)=>{
    const file = path.join(__dirname+"/../utils/location.js");
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(file);
    console.log("location file sended");
});

module.exports = router;