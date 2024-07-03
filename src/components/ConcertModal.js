import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../css/style.css';

const ConcertModal = ({ show, handleClose, concert }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{concert.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: 'flex', width: '300px'}}>
        <img src={concert.image} alt={concert.title} style={{ width: '20%', height: 'auto' }} />
        <p>{concert.description}</p>
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
