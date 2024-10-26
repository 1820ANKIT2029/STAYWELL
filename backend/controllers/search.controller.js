const location = async (req, res, next) => {
    console.log("location search working");
    const loc = req.query.loc;
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
        res.status(200).json(result);
        console.log("location send", loc);
    }catch(error){
        console.log("Error in location controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Location error ended");
};

const hotelsByCoordinate = async(req, res, next)=>{
    console.log("hotels search working");

    const {adults_number,checkin_date,checkout_date,room_number,longitude,latitude,order_by,page_number} = req.query;
    
    const url = 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by='+order_by+'&longitude='+longitude+'&room_number='+room_number+'&adults_number='+adults_number+'&locale=en-gb&checkin_date='+checkin_date+'&checkout_date='+checkout_date+'&filter_by_currency=INR&latitude='+latitude+'&units=metric&include_adjacency=true&page_number='+page_number;
    
    const option = {
        method: 'GET', 
        headers: {
            'X-RapidAPI-Key': process.env.BOOKING_API_KEY,
		    'X-RapidAPI-Host': process.env.BOOKING_API_HOST
        }
    };

    try{
        const response = await fetch(url, option);
        const result = await filterResponse(response);
        res.status(200).json(result); 
        console.log("Hotels info sent");

    }catch(error){
        console.log("Error in location controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("hotels search ended");
};

// function to filter the response from the hotel api call

async function filterResponse(response){
    const data = await response.json();
    const filteredData = data.result.map(item => ({
        "review_score": item.review_score || null,
        "city_name": item.city_name_en,
        "timezone": item.timezone ,
        "review": item.review_nr || null,
        "accommodation_type": item.accommodation_type || 0,
        "main_photo_url": item.main_photo_url || "",
        "city_trans": item.city_trans,
        "currency_code": item.currency_code,
        "hotel_id": item.hotel_id,
        "longitude": item.longitude,
        "latitude": item.latitude,
        "min_total_price": item.min_total_price,
        "hotel_name": item.hotel_name,
        "city": item.city,
        "country": item.country_trans,
        "address": item.address || "",
        "max_photo_url": item.max_photo_url || "",
        "max_1440_photo_url": item.max_1440_photo_url || "",
    }));
    
    return filteredData;
}


module.exports = {
    location,
    hotelsByCoordinate
};