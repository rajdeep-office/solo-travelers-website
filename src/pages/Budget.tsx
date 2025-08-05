import React from 'react';
import BudgetBreakdown from '../components/BudgetBreakdown';
import DestinationBudgets from '../components/DestinationBudgets';
import FlightCosts from '../components/FlightCosts';
import AirbnbOptions from '../components/AirbnbOptions';
import AIChat from '../components/AIChat';

const Budget: React.FC = () => {
    return (
        <div className="budget-page">
            <h1>Budget Planning for Solo Travelers</h1>
            <BudgetBreakdown />
            <DestinationBudgets />
            <FlightCosts />
            <AirbnbOptions />
            <AIChat />
        </div>
    );
};

export default Budget;