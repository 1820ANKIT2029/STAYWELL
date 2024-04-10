import React from "react";
import ReactDOM from "react-dom";
import './carousel.css';

function Searchbar(){
    return (
        <div className="m-10 p-10 flex flex-col justify-start max-w-[400px] rounded-xl" id="background">
            <h1>where</h1>
            <input className="inputbox m-2 p-2"
            type="text"
            placeholder="e.g Area Landmark or Property Name"
           
            />
            <h1 class="checkin-title">Check-in</h1>
            <input className="checkin m-2 p-2 "
            type="text"
            placeholder="check-in date"
            />
             <h1 class="checkout-title">Check-out</h1>
             <input className="checkout m-2 p-2"
            type="text"
            placeholder="check-out date"
            />
            <h2> Guests</h2>
            <input className="Guests m-2 p-2"
            type="text"
            placeholder="e.g 2 Adults"
            />
           <button  type="submit" className="submitbutton m-2 p-2 bg-blue-400">
            <h1>Submit</h1>
          
           </button>
        
        </div>
    )}
    export default Searchbar;