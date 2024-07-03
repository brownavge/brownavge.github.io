import React, { useState } from 'react';
import ConcertModal from '../components/ConcertModal.js'; 
import Fall22 from '../images/poster_f22.jpg';
import Spring23 from '../images/poster_s23.jpg';
import Fall23 from '../images/poster_f23.png';
import Spring24 from '../images/poster_s24.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState(null);

  const concerts = [
    {
      id: 3,
      title: 'Fall 2023 Concert',
      image: Fall23,
      description: 'Details about Concert 2...'
    },
    {
      id: 4,
      title: 'Spring 2024 Concert',
      image: Spring24,
      description: 'Details about Concert 2...'
    },
    {
      id: 1,
      title: 'Fall 2022 Concert',
      image: Fall22,
      description: 'Details about Concert 1...'
    },
    {
      id: 2,
      title: 'Spring 2023 Concert',
      image: Spring23,
      description: 'Details about Concert 2...'
    },
  ];

  const handlePosterClick = (concert) => {
    setSelectedConcert(concert);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedConcert(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Events</h1>
      <div className="poster-container">
        {concerts.map(concert => (
          <div key={concert.id} className="poster-item" onClick={() => handlePosterClick(concert)} style={{ cursor: 'pointer' }}>
            <img src={concert.image} alt={concert.title} style={{ width: '100%', height: 'auto' }} />
            <p>{concert.title}</p>
          </div>
        ))}
      </div>
      {selectedConcert && (
        <ConcertModal
          show={showModal}
          handleClose={handleCloseModal}
          concert={selectedConcert}
        />
      )}
    </div>
  );
};

export default Events;
