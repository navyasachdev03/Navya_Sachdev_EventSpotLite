import React from 'react';

const EventCard = ({ event, openModal }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => openModal(event)}
    >
      <img src={event.image} alt={event.name} className="w-full h-50 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{event.name}</h2>
        <p className="text-gray-500">{event.date} | {event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;