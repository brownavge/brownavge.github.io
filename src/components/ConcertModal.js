import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import '../css/style.css';

const ConcertModal = ({ show, handleClose, concert }) => {
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="custom-modal" className="wide-modal">
      <Modal.Header closeButton>

      </Modal.Header>
      <Modal.Body>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ borderRight: '1px dotted gray', padding: '20px', width: '30%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Modal.Title><center>{concert.title}</center></Modal.Title>
            <img src={concert.image} alt={concert.title} style={{ width: 'auto' }} />
            <center><a href={concert.setlist} rel="noreferrer" target='_blank'>Setlist</a></center>
          </div>
          <div style={{ overflowY: 'scroll', height: '60vh', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <p style={{ fontSize: '20px' }}><center>{concert.description}</center></p>
            <p style={{ fontSize: '20px' }}><center>Small Ensembles</center></p>
            <Carousel interval={null}>
              {concert.matineeSmalls.map((video, index) => (
                <Carousel.Item key={index}>
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${video}`}
                    title={`YouTube video player ${index}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </Carousel.Item>
              ))}
            </Carousel>
            <Carousel interval={null}>
              {concert.eveningSmalls.map((video, index) => (
                <Carousel.Item key={index}>
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${video}`}
                    title={`YouTube video player ${index}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConcertModal;
