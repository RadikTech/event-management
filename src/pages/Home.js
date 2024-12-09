import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = () => {
            const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
            setEvents(storedEvents);
        };

        fetchEvents();
    }, []);

    return (
        <div className='p-2'>
            <h1>Upcoming Events</h1>
            <div className="flex flex-col">
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <div className="col-md-4" key={index}>
                            <EventCard event={event} index={index} />
                        </div>
                    ))
                ) : (
                    <p>No events found. Please create an event.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
