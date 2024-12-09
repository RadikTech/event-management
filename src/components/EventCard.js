import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event, index }) => {
    return (
        <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">{event.title}</h5>
                <p className="text-gray-700 mb-2">{event.description}</p>
                <p className="text-sm text-gray-500">
                    <small>{new Date(event.date).toLocaleString()}</small>
                </p>
                <Link to={`/events/${index}`} className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
