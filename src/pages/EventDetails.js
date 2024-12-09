import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = () => {
            const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
            const eventDetails = storedEvents[id];
            if (eventDetails) {
                setEvent(eventDetails);
            } else {
                toast.error('Event not found!');
            }
        };

        fetchEvent();
    }, [id]);

    const handleRSVP = () => {
        try {
            const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
            const updatedEvents = storedEvents.map((evt, index) =>
                index.toString() === id
                    ? { ...evt, rsvp: true }
                    : evt
            );
            localStorage.setItem('events', JSON.stringify(updatedEvents));
            toast.success('Successfully RSVP’d!');
        } catch (error) {
            toast.error('Failed to RSVP!');
        }
    };

    if (!event) return <div className="text-center mt-6 text-lg text-gray-500">Loading...</div>;

    return (
        <div className="m-2 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h2>
            {event.image && (
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
            )}
            <p className="text-gray-600 mb-4">{event.description}</p>
            <p className="text-gray-700 mb-2">
                <strong>Date:</strong> {new Date(event.date).toLocaleString()}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>Location:</strong> {event.location}
            </p>
            <p className="text-gray-700 mb-4">
                <strong>Max Attendees:</strong> {event.maxAttendees}
            </p>
            <button
                className={`px-6 py-2 rounded text-white ${
                    event.rsvp
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600 transition'
                }`}
                onClick={handleRSVP}
                disabled={event.rsvp}
            >
                {event.rsvp ? 'Already Confirmed' : 'Confirm'}
            </button>
        </div>
    );
};

export default EventDetails;
