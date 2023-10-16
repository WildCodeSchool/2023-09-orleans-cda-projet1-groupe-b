import React from 'react';

export default function Cube3D() {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">
          <img src="images/Cat1.webp" alt="Image 1" />
        </div>
        <div className="face back">
          <img src="images/Cat5.webp" alt="Image 2" />
        </div>
        <div className="face right">
          <video autoPlay loop muted>
            <source src="images/Sonic.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="face left">
          <video autoPlay loop muted>
            <source src="images/Fzero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="face top">
          <img src="images/Cat3.webp" alt="Image 3" />
        </div>
        <div className="face bottom">
          <img src="images/Cat4.webp" alt="Image 4" />
        </div>
      </div>
    </div>
  );
}
