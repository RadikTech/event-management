import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [maxAttendees, setMaxAttendees] = useState(0);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(image);
    }, [image]);

    const handleCreateEvent = (e) => {
        e.preventDefault();

        try {
            // Create an event object
            const event = {
                _id: Math.floor(Math.random() * 100) + 1,
                title,
                description,
                date,
                location,
                maxAttendees,
                image: image ? URL.createObjectURL(image) : null,
            };

            // Retrieve existing events from localStorage
            const existingEvents = JSON.parse(localStorage.getItem('events')) || [];

            // Add the new event to the list
            const updatedEvents = [...existingEvents, event];

            // Save updated events list to localStorage
            localStorage.setItem('events', JSON.stringify(updatedEvents));

            // Notify the user
            toast.success('Event created successfully!');

            // Navigate to the home page
            navigate('/');
        } catch (error) {
            toast.error('Failed to create event!');
        }
    };

    return (
        <form onSubmit={handleCreateEvent} className="m-4 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Event</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Title</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Date</label>
                <input
                    type="datetime-local"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Location</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Max Attendees</label>
                <input
                    type="number"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={maxAttendees}
                    onChange={(e) => setMaxAttendees(e.target.value)}
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Image</label>
                <input
                    type="file"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Create Event
            </button>
        </form>
    );
};

export default CreateEvent;
