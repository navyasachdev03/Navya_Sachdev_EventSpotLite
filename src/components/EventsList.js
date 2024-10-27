import React from 'react';
import Card from './Card';

const EventsList = ({ events, openModal }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
      {events.map(event => (
        <Card key={event.id} event={event} openModal={openModal} />
      ))}
    </div>
  );
};

export default EventsList;