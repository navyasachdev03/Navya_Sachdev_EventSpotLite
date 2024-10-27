import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventsList from './components/EventsList';
import Modal from './components/Modal';
import events from './events';


function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="App bg-gray-100 min-h-screen">
      <Navbar setSearchTerm={setSearchTerm} />
      <EventsList events={filteredEvents} openModal={openModal} />
      {selectedEvent && <Modal event={selectedEvent} closeModal={closeModal} />}
    </div>
  );
}

export default App;