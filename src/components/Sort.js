import React from "react";

function Sort ({ setSortedNameWeight }) {
    return (
        <select className="ui dropdown" onChange={(event) => setSortedNameWeight(event.target.value)}>
            <option value="">Sort Hogs</option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
        </select>
    )
}

export default Sort