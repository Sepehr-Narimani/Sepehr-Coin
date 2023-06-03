import React from 'react';

// Gif
import spinner from "../../gif/spinner.gif";

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="Landing" />
            <h1>Landing ...</h1>
        </div>
    );
};

export default Loader;