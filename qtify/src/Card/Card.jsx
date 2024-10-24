import React from 'react';
import './Card.module.css'; 
import { Chip } from '@mui/material'; 

const Card = ({ album }) => {
  return (
    <div className="card">
      <img src={album.image} alt={album.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{album.title}</h3>
        <Chip label={`${album.follows} follows`} className="card-chip" />
      </div>
    </div>
  );
};

export default Card;
