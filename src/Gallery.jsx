// Gallery.jsx
import React from 'react';
import foto1 from './images/foto1.jpeg';
import foto2 from './images/foto2.jpeg';
import foto3 from './images/foto3.jpeg';
import foto4 from './images/foto4.jpeg';
import foto5 from './images/foto5.jpeg';
import foto6 from './images/foto6.jpeg';
import foto10 from './images/foto10.jpeg';
import foto11 from './images/foto11.jpeg';
import foto12 from './images/foto12.jpeg';
import foto13 from './images/foto13.jpeg';
import foto14 from './images/foto14.jpeg';
import foto15 from './images/foto15.jpeg';

const Gallery = () => {
  const photos = [foto1, foto2, foto3, foto4, foto5, foto6, foto10,
    foto11, foto12, foto13, foto15, foto14];

  return (
    <div className="gallery">
      <div className="photos">
        {photos.map((photo, index) => (
          <div key={index} className={`photo-container ${index === 12 || index === 13 ? 'horizontal' : ''}`}>
            <img src={photo} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
