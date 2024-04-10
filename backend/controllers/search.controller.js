const location = async (req, res, next) => {
    const {loc} = req.body;
    const url = 'https://booking-com.p.rapidapi.com/v1/hotels/locations?name='+loc+'&locale=en-gb';

    const option = {
        method: 'GET', 
        headers: {
            'X-RapidAPI-Key': process.env.BOOKING_API_KEY,
		    'X-RapidAPI-Host': process.env.BOOKING_API_HOST
        }
    };

    try{
        const response = await fetch(url , option);
        const result = await response.text();
        res.status(200).json(result);
        console.log("location send");
    }catch(error){
        console.log("Error in location controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const hotelsByCoordinate = async(req, res, next)=>{
    const {order_by, longitude, room_number, adults_number, checkin_date, checkout_date, latitude} = req.body;
    const url = 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by='+order_by+'&longitude='+longitude+'&room_number='+room_number+'&adults_number='+adults_number+'&locale=en-gb&checkin_date='+checkin_date+'&checkout_date='+checkout_date+'&filter_by_currency=INR&latitude='+latitude+'&units=metric';

    const option = {
        method: 'GET', 
        headers: {
            'X-RapidAPI-Key': process.env.BOOKING_API_KEY,
		    'X-RapidAPI-Host': process.env.BOOKING_API_HOST
        }
    };

    try{
        const response = await fetch(url , option);
        const result = await response.text();
        res.status(200).json(result);
        console.log("Hotels info send");
    }catch(error){
        console.log("Error in location controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    location,
    hotelsByCoordinate
}