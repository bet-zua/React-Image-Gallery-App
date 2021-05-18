import React from 'react';

/* Displays an image from the results*/
const Photo = ({ url }) => {
    return (
        <li>
            <img src={url} alt=""/>
        </li>
    );
};

export default Photo;