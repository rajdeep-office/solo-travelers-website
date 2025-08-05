import React from 'react';

const DestinationBudgets: React.FC = () => {
    const destinations = [
        { name: 'Thailand', budget: 30 },
        { name: 'Spain', budget: 50 },
        { name: 'Australia', budget: 70 },
        { name: 'Japan', budget: 60 },
        { name: 'Brazil', budget: 40 },
    ];

    return (
        <div className="destination-budgets">
            <h2>Destination Budgets</h2>
            <ul>
                {destinations.map((destination) => (
                    <li key={destination.name}>
                        <strong>{destination.name}</strong>: ${destination.budget} per day
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DestinationBudgets;