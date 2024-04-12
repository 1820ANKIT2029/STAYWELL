import React from "react";
import ReactDOM from "react-dom";
import Header from '../header';
import Footer from '../footer';
import Hoteldetails from "../hoteldetails";
import Searchbar from "../searchbar";
import "./details.css"
function Details(){
    return (
        <div>
            <Header/>
            <div className="main-details">
                <Hoteldetails/>
                <div className="sidebar-details">
                <Searchbar/>
                </div>
                    
            </div>
            
            <Footer/>
        </div>
    )
}
export default Details;