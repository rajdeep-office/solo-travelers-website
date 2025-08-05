import React, { useEffect, useState } from 'react';

const FlightCosts = () => {
    const [flightData, setFlightData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFlightCosts = async () => {
            try {
                const response = await fetch('/api/flights'); // Replace with actual API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFlightData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFlightCosts();
    }, []);

    if (loading) {
        return <div>Loading flight costs...</div>;
    }

    if (error) {
        return <div>Error fetching flight costs: {error}</div>;
    }

    return (
        <div className="flight-costs">
            <h2>Flight Costs</h2>
            <ul>
                {flightData.map((flight, index) => (
                    <li key={index}>
                        <strong>{flight.route}</strong>: ${flight.cost}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlightCosts;