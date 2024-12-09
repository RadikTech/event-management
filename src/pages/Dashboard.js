import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [createdEvents, setCreatedEvents] = useState([]);
    const [rsvpedEvents, setRsvpedEvents] = useState([]);

    useEffect(() => {
        // Fetch data from localStorage on component mount
        const storedCreatedEvents = JSON.parse(localStorage.getItem('events')) || [];
        const storedRsvpedEvents = JSON.parse(localStorage.getItem('events')) || [];
        const rsvpTrueEvents = storedRsvpedEvents.filter(event => event.rsvp === true);

        setCreatedEvents(storedCreatedEvents);
        setRsvpedEvents(rsvpTrueEvents);
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-8 p-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>

            <Link
                to="/create-event"
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition mb-6"
            >
                Create Event
            </Link>

            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Created Events</h3>
                {createdEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {createdEvents.map((event, index) => (
                            <EventCard event={event} index={index} key={index} />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No events created yet.</p>
                )}
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Confirmed Events</h3>
                {rsvpedEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rsvpedEvents.map((event, index) => (
                            <EventCard event={event} index={index} key={index} />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No confirmed events yet.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
