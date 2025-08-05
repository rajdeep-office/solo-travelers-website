import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with actual API base URL

export const fetchFlightCosts = async (destination) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/flights?destination=${destination}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching flight costs:', error);
        throw error;
    }
};

export const fetchAirbnbOptions = async (location) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/airbnb?location=${location}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Airbnb options:', error);
        throw error;
    }
};

export const fetchDestinationBudgets = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/budgets`);
        return response.data;
    } catch (error) {
        console.error('Error fetching destination budgets:', error);
        throw error;
    }
};