import React, { useState} from "react";
import Hogs from "../porkers_data";
import Specialty from "./Specialty"

function Title() {
    const [selectedHog, setSelectedHog] = useState(null);
    const [showGreased, setShowGreased] = useState(false);

    const handleHogClick = (hog) => {
        setSelectedHog(hog);
    }

    const handleFilterClick = () => {
        setShowGreased (!showGreased)
    };

    const filteredHogs = showGreased ? Hogs.filter(hog => hog.greased) : Hogs

    return (
        <div>
            <input 
                type="text"
            />
            <button onClick={handleFilterClick}>
                {showGreased ? "Show All Hogs" : "Show Greased Hogs"}
            </button>
            {filteredHogs.map((hog, index) => (
                <div key={index}>
                    <h1 onClick= {() => handleHogClick(hog)}>
                        <a href="#">
                            {hog.name}
                        </a>
                    </h1>
                    <img src={hog.image} alt={hog.name} />
                    {selectedHog === hog && <Specialty hog={selectedHog} />}
                </div>
            ))}
        </div>
    );
}

export default Title;
