import React from 'react';
import DestinationBudgets from '../components/DestinationBudgets';
import FlightCosts from '../components/FlightCosts';
import AirbnbOptions from '../components/AirbnbOptions';
import BudgetBreakdown from '../components/BudgetBreakdown';
import AIChat from '../components/AIChat';

const Destinations: React.FC = () => {
    return (
        <div className="destinations-page">
            <h1>Explore Your Next Adventure</h1>
            <p>Discover budget-friendly travel destinations tailored for solo travelers.</p>
            <DestinationBudgets />
            <FlightCosts />
            <AirbnbOptions />
            <BudgetBreakdown />
            <AIChat />
        </div>
    );
};

export default Destinations;