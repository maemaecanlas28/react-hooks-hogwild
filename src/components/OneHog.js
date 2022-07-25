import React, { useState } from "react";

function OneHog ({ hog }) {

    const [isShownDescription, setIsShownDescription] = useState(false);
    const [isHiddenCard, setIsHiddenCard] = useState(false);

    
    return (
        <>
        {!isHiddenCard ? (
            <div className="ui four wide column card">
                <div className="image">
                    <img onClick={() => setIsShownDescription(!isShownDescription)} src={hog.image} />
                </div>
                <div className="content">
                    <a className="header">{hog.name}</a>
                    {isShownDescription ? (
                        <div className="description">
                            <div>Weight: {hog.weight}</div>
                            <div>Specialty: {hog.specialty}</div>
                            <div>Achievement: {hog["highest medal achieved"]}</div>
                            <div>Greased: {`${hog.greased}`}</div>
                        </div>
                    ): null}
                    <button onClick={() => setIsHiddenCard(!isHiddenCard)}> Hide Me </button>
                </div>
            </div>
        ) : null }
        </>
    )
}

export default OneHog