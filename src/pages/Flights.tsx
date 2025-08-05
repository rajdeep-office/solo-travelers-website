import React from 'react';
import FlightCosts from '../components/FlightCosts';
import Navbar from '../components/Navbar';

const Flights: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#FFA500', padding: '20px', minHeight: '100vh' }}>
            <Navbar />
            <h1 style={{ color: '#fff' }}>Flight Options and Costs</h1>
            <FlightCosts />
        </div>
    );
};

export default Flights;