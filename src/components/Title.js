import React from "react";

function Title({ hogs, onHogClick }) {
    return (
        <div>
            {hogs.map((hog, index) => (
                <div key={index}>
                    <h1>
                        <a href="#" onClick={() => onHogClick(hog)}>
                            {hog.name}
                        </a>
                    </h1>
                    <img src={hog.image} alt={hog.name} />
                </div>
            ))}
        </div>
    );
}

export default Title;
