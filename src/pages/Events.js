import React, { useState } from 'react';
import ConcertModal from '../components/ConcertModal.js';
import Fall22 from '../images/poster_f22.jpg';
import Spring23 from '../images/poster_s23.jpg';
import Fall23 from '../images/poster_f23.png';
import Spring24 from '../images/poster_s24.png';
import Spring22 from '../images/poster_s22.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import richard_talking from '../images/richard_talking.jpg';

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState(null);

  const concerts = [
    {
      id: 4,
      title: 'Spring 2024 Concert',
      image: Spring24,
      description: 'Monday, May 6, 2024 in Riley Hall',
      matineeSmalls: ['K719Z9QRDr8', 'cVpCxgUqSGs', 'BPqMePeV8Sc', 'fYLY-NQY8y0', 'eHwqwFtnTs4', 'IBJ7-ShWZcc', 'ozPT0On_7SU', 'cI4D9qmFHrc', 'vveX6BgB_Ho', '20U5Mp36Cws', 'zUx4pz82E7o'],
      eveningSmalls: ['zx5L6pGXv2g', 'pwliKfkFT3A', '4ttQkWiVF54', 'Pv9Ai7npyPk', 'NGPSXyQsnEk', '1lc5fFcBSag', 'jN06WQWWwsI', 'YeygveYOzIw', 'vSBNWKse4bg', 'Jidz-pQEMvg', 'qszbZh_xFWQ'],
      setlist: 'https://drive.google.com/file/d/1FJW-5aob0H9rFSMuf-Our36e84pxX8qB/view?usp=drive_link'
    },
    {
      id: 3,
      title: 'Fall 2023 Concert',
      image: Fall23,
      description: "Saturday, December 2 in Riley Hall",
      matineeSmalls: [],
      eveningSmalls: []
    },
    {
      id: 2,
      title: 'Spring 2023 Concert',
      image: Spring23,
      description: 'Friday, April 28 in Alumnae Hall',
      matineeSmalls: [],
      eveningSmalls: []
    },
    {
      id: 1,
      title: 'Fall 2022 Concert',
      image: Fall22,
      description: 'Monday, December 5 in Alumnae Hall',
      matineeSmalls: [],
      eveningSmalls: []
    },
    {
      id: 0,
      title: 'Spring 2022 Concert',
      image: Spring22,
      description: 'Sunday, April 17 in Petteruti Lounge',
      matineeSmalls: [],
      eveningSmalls: []
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
    <div>
      <div style={{ position: 'relative', height: '20vh', overflow: 'hidden' }}>
        <img className='background-img' style={{ objectPosition: '50% 400%' }} src={richard_talking} alt="Guitars" />
        <div className="overlay"></div>
        <div className="centered">
          <p style={{ fontSize: '50px', marginTop: '30%' }}>EVENTS</p>
        </div>
      </div>
      <div style={{ padding: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'black' }}>
        <div className="poster-container">
          {concerts.map(concert => (
            <div key={concert.id} className="poster-item" onClick={() => handlePosterClick(concert)} style={{ cursor: 'pointer' }}>
              <img src={concert.image} alt={concert.title} style={{ width: '100%', height: 'auto' }} />
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
    </div>
  );
};

export default Events;
