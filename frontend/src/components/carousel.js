import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./carousel.css";

function Carousel(){
  const places=[
    {
      img:"/assets/img1.jpg"
    },
    {
      img:"/assets/img2.jpg"
    },
    {
      img:"/assets/img3.jpg"
    },
    {
      img:"/assets/img4.jpg"
    }
  ]
  const [index,setIndex]=useState(0);
  function handleClick(direction){
      const newIndex=(index + direction + 3)%3;
      setIndex(newIndex);
  }
    return (
      <div className="full justify-center place-content-center places">
       <h1 className="italic text-4xl">Popular Destinations</h1>
        <div className="flex flex-col justify-center">
          <img className="w-3/4 m-auto rounded-3xl"  src={places[index].img} />
          <div className="flex justify-between">
            <button onClick={()=>handleClick(1) }  className=" m-2 p-2 bg-blue-400  rounded-xl" id="pos">

              
              Previous</button>
            <button onClick={()=>handleClick(-1)} className="m-2 p-2 bg-blue-400  rounded-xl" id="pos2">next</button>
          </div>
        </div>
      </div>
    );
}
export default Carousel;