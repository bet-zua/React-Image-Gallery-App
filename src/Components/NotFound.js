//Stateless component -> class component
import React from 'react';

const NotFound = () => {
    return (
        <li className="not-found">
            <h2>🔍 Page Not Found 🔎</h2>
            <p>This is not the page you are looking for. Please try again.</p>
        </li>
    );
};

export default NotFound;