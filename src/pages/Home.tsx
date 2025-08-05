import React from 'react';
import Navbar from '../components/Navbar';
import BudgetBreakdown from '../components/BudgetBreakdown';
import DestinationBudgets from '../components/DestinationBudgets';
import FlightCosts from '../components/FlightCosts';
import AirbnbOptions from '../components/AirbnbOptions';
import AIChat from '../components/AIChat';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <Navbar />
            <header className="home-header">
                <h1>Welcome to Solo Travelers</h1>
                <p>Your ultimate guide to solo travel adventures!</p>
            </header>
            <section className="features">
                <h2>Explore Our Features</h2>
                <BudgetBreakdown />
                <DestinationBudgets />
                <FlightCosts />
                <AirbnbOptions />
            </section>
            <AIChat />
        </div>
    );
};

export default Home;