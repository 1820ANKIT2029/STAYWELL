import React from "react";

import './carousel.css';

function Searchbar(){
    return (
        <div className="bg-gray-400 m-10 p-10 flex flex-col justify-start max-w-[400px] rounded-xl search">
            <h1 className="text-2xl">where</h1>
            <input className="inputbox m-2 p-2"
            type="text"
            placeholder="e.g Area Landmark or Property Name"
           
            />
            <h1 class="checkin-title text-2xl">Check-in</h1>
            <input className="checkin m-2 p-2 inputbox"
            type="date"
            placeholder="check-in date"
            />
             <h1 class="checkout-title text-2xl">Check-out</h1>
             <input className="checkout m-2 p-2 inputbox"
            type="date"
            placeholder="check-out date"
            />
            <h1 className="text-2xl"> Guests</h1>
            <input className="Guests m-2 p-2 inputbox"
            type=""
            placeholder="e.g 2 Adults"
            />
           <button  type="submit" className="submitbutton m-2 p-2 bg-blue-400 inputbox">
            <h1 >Submit</h1>
          
           </button>
        
        </div>
    )}
    export default Searchbar;