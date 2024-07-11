import React, { useState } from "react";
import Title from "./Title.js";
import Nav from "./Nav";
import Specialty from "./Specialty";
import Hogs from "../porkers_data";

function App() {

    return (
        <div className="App">
            <Nav />
            <Title title={Hogs.Title}/>
        </div>
    );
}

export default App;
