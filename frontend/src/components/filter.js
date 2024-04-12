import React from "react";
import ReactDOM from "react-dom";


function Filter(){
    return (
        <div>
             <label for="price_filter">Price:</label>
<select id="price_filter" name="price_filter">
  <option value="0-50">$0 - $50</option>
  <option value="51-100">$51 - $100</option>
  <option value="101-200">$101 - $200</option>
  <option value="201-500">$201 - $500</option>
  <option value="501+">Over $500</option>
</select>

        </div>
    )
}
export default Filter;