import React from "react";
import Hogs from "../porkers_data"


function Specialty() {
    return (
        <div>
            {Hogs.map((hog, index) => (
                <div key={index}>
                    <p>{hog.specialty}</p>
                    <p>{hog.greased ? "Greased" : "Not Greased"}</p>
                    <p>{hog.weight}</p>
                    <p>Highest Medal: {["highest medal achieved"]}</p>
                </div>
            ))}
        </div>
    );
}

export default Specialty;