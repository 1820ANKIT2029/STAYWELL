const location = async (req, res, next) => {
    console.log("location search working");
    const loc = req.query.loc;
    if(!loc){
        const e = {error: "Invalid Location (loc)"};
        res.status(500).json(e);
        console.log("Location error: ", e);
    }
    else{
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
            const result = await response.json();
            let data = []
            for(let location of result){
                const l = {
                    "latitude": location["latitude"],
                    "longitude": location["longitude"],
                    "timezone": location["timezone"],
                    "city_name": location["city_name"],
                    "region": location["region"],
                    "country": location["country"],
                    "image_url": location["image_url"]
                }
                data.push(l);
            }
            res.status(200).json(data);
            console.log("location send: ", loc);

        }catch(error){
            console.log("Error in location controller", error);
            const e = { error: "Internal Server Error" };
            res.status(500).json(e);
            console.log("Location error: ", e);
        }
    }
    
};

const hotelsByCoordinate = async(req, res, next)=>{
    console.log("hotels search working");
    const order_by = req.query.order_by;
    const longitude = req.query.longitude;
    const room_number = req.query.room_number;
    const adults_number = req.query.adults_number;
    const checkin_date = req.query.checkin_date;
    const checkout_date = req.query.checkout_date;
    const latitude = req.query.latitude;
    const categories_filter_ids = req.query.categories_filter_ids;
    const children_ages = req.query.children_ages;
    const children_number = req.query.children_number;
    const page_number = req.query.page_number;
    
    const url = 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by='+order_by+'&longitude='+longitude+'&room_number='+room_number+'&adults_number='+adults_number+'&locale=en-gb&checkin_date='+checkin_date+'&checkout_date='+checkout_date+'&filter_by_currency=INR&latitude='+latitude+'&units=metric&include_adjacency=true&categories_filter_ids='+categories_filter_ids+'&children_ages='+children_ages+'&children_number='+children_number+'&page_number='+page_number;
    
    const option = {
        method: 'GET', 
        headers: {
            'X-RapidAPI-Key': process.env.BOOKING_API_KEY,
		    'X-RapidAPI-Host': process.env.BOOKING_API_HOST
        }
    };

    try{
        const response = await fetch(url , option);
        const result = await response.json();
        res.status(200).json(result);
        console.log("Hotels info send");
    }catch(error){
        console.log("Error in location controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("hotels search ended");
};

module.exports = {
    location,
    hotelsByCoordinate
};