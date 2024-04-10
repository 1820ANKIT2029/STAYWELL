const express = require("express");
const searchController = require("../controllers/search.controller");

const router = express.Router();

router.get('/location', searchController.location);
router.get('/hotels', searchController.hotelsByCoordinate)
//router.get('/', searchController.something);


module.exports = router;