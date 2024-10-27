import React from 'react';

const Modal = ({ event, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-gray-500" onClick={closeModal}>X</button>
        <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded-lg" />
        <h2 className="text-xl font-bold mt-4">{event.name}</h2>
        <p className="text-gray-500">{event.date} - {event.location}</p>
        <p className="mt-2">{event.description}</p>
      </div>
    </div>
  );
};

export default Modal;