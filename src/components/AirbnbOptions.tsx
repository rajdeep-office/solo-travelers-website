import React from 'react';

const AirbnbOptions: React.FC = () => {
    const airbnbListings = [
        {
            id: 1,
            title: "Cozy Studio in the Heart of the City",
            price: "$75/night",
            location: "Downtown",
            imageUrl: "https://example.com/image1.jpg"
        },
        {
            id: 2,
            title: "Charming Cottage with Garden",
            price: "$100/night",
            location: "Suburbs",
            imageUrl: "https://example.com/image2.jpg"
        },
        {
            id: 3,
            title: "Modern Apartment with City View",
            price: "$120/night",
            location: "City Center",
            imageUrl: "https://example.com/image3.jpg"
        }
    ];

    return (
        <div className="airbnb-options">
            <h2>Airbnb Accommodation Options</h2>
            <div className="listings">
                {airbnbListings.map(listing => (
                    <div key={listing.id} className="listing">
                        <img src={listing.imageUrl} alt={listing.title} />
                        <h3>{listing.title}</h3>
                        <p>{listing.location}</p>
                        <p>{listing.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AirbnbOptions;