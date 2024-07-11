import React from "react";
import Hogs from "../porkers_data"


function Specialty({ hog }) {
    return (
        <div>
            <p>Name: {hog.name}</p>
            <p>Specialty: {hog.specialty}</p>
            <p>Greased: {hog.greased ? "Greased" : "Not Greased"}</p>
            <p>Weight: {hog.weight}</p>
            <p>Highest Medal: {["highest medal achieved"]}</p>
                
        </div>
    );
}

export default Specialty;