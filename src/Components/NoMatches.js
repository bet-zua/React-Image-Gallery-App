import React from 'react';

/* Displays a No Matches Found error page */
const NoMatches = () => {
    return (
        <li className="not-found">
            <h2>🙅🏽‍♀️ No Matches Found 🙅🏽‍♀️</h2>
            <p>You search did not return any results. Please try again.</p>
        </li>
    );
};

export default NoMatches;