import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
      </div>
    </div>
  );
};

export default Modal;
