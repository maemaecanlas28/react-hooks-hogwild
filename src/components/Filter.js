import React from "react";

function Filter ({ filteredGreased, setFilteredGreased }) {

    return (
        <div className="ui checkbox">
            <input 
                type="checkbox" 
                name="greased" 
                onChange={() => setFilteredGreased(!filteredGreased)}
                checked={filteredGreased ? "checked" : ""} />
            <label>You want a greased pig?</label>
        </div>
    )
}  

export default Filter