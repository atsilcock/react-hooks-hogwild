import React, { useState } from "react";
import Title from "./Title.js";
import Nav from "./Nav";
import Specialty from "./Specialty";
import Hogs from "../porkers_data";

function App() {
    const [selectedHog, setSelectedHog] = useState(null);

    const handleHogClick = (hog) => {
        setSelectedHog(hog);
    };

    return (
        <div className="App">
            <Nav />
            <Title hogs={Hogs} onHogClick={handleHogClick} />
            {selectedHog && <Specialty hog={selectedHog} />}
        </div>
    );
}

export default App;
