import React from "react";
import OneHog from "./OneHog";

function DisplayHogs({ hogs, filteredGreased, sortedNameWeight }) {
    const cardHogs = hogs
    // Boolean
    .filter(hog => {
        if (filteredGreased) {
            return hog.greased
        } else {
            return true;
        }
    })
    // Comparing --> returns a number
    .sort((firstHog, secondHog) => {
        if (sortedNameWeight === "Name") {
            if (firstHog.name < secondHog.name) {
                return -1 
            } 
            else if (firstHog.name > secondHog.name) {
                return 1 
            }
            else {
                return 0
            }
        }
        else if (sortedNameWeight === "Weight") {
            return firstHog.weight - secondHog.weight
        }
        return 0
    })
    // returns a new modified array   
    // or just (hog) for parameter and pass key = { hog.name }
    .map((hog, index) => {
        return (
            <OneHog key={index} hog={hog} />
        )
    })

   return (
    <div className="ui grid container">
         {cardHogs}
    </div>
   
   )
}

export default DisplayHogs