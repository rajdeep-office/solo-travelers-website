import React from 'react';
import AirbnbOptions from '../components/AirbnbOptions';

const Airbnb: React.FC = () => {
    return (
        <div className="airbnb-page">
            <h1>Airbnb Options for Solo Travelers</h1>
            <p>Explore a variety of Airbnb accommodations tailored for solo adventurers.</p>
            <AirbnbOptions />
        </div>
    );
};

export default Airbnb;