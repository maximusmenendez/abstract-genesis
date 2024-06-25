// BranchCard.js
import React, { useState } from 'react';
import './BranchCards.css';
import EditBranchPopup from './EditBranchPopup';
import { IoMdCloseCircleOutline } from "react-icons/io";


const BranchCard = ({ branch, onDelete, onUpdate }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleBranchDelete = async (event) => {
    event.stopPropagation();

  };

  return (
    <div>
      <div className={`branch-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="card-front">
        <span className="delete-button" onClick={handleBranchDelete}><IoMdCloseCircleOutline style={{ fontSize: '25px'}}/></span>
          <h1>{branch.city}, {branch.state}</h1>
          <p><strong>ZIP Code:</strong> {branch.zip}</p>
          <p><strong>Operating Hours:</strong> {branch.operatingHours}</p>
          <p><strong>Branch Manager:</strong> {branch.branchManager}</p>
          <p><strong>Number of Employees:</strong> {branch.numberOfEmployees}</p>
          <button onClick={handleButtonClick}>Edit Branch</button>
          {/* <button onClick={handleBranchDelete}>Delete</button> */}
        </div>
        <div className="card-back">
          <h2>More info or map/image</h2>
        </div>
      </div>
      {isPopupVisible && (
        <EditBranchPopup
          branch={branch}
          onClose={closePopup}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};

export default BranchCard;
