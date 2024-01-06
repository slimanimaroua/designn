import React from 'react';

const Carousel = () => {
  return (

        <div id="mycarousel" className="carousel slide" style={{ height: '100vh' }}>
        <div className="carousel-inner">
        <div className="carousel-item active">
  <img src="http://localhost:5000/images/téléchargement (1).jfif" className="d-block w-100" style={{ height: '100vh' }} alt="Image 1" />
  <div className="carousel-caption">
    
  </div>
</div>

<div className="carousel-item">
  <img src="http://localhost:5000/images/22878583.webp" className="d-block w-100" style={{ height: '100vh' }} alt="Image 2" />
  <div className="carousel-caption">
    
  </div>
</div>

<div className="carousel-item">
  <img src="http://localhost:5000/images/téléchargement.jfif" className="d-block w-100" style={{ height: '100vh' }} alt="Image 3" />
  <div className="carousel-caption">
    
  </div>
</div>

<div className="carousel-item">
  <img src="http://localhost:5000/images/images.jfif" className="d-block w-100" style={{ height: '100vh' }} alt="Image 4" />
  <div className="carousel-caption">
   
  </div>
</div>

        </div>
        <button className="carousel-control-prev h-1/2 my-auto" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next h-1/2 my-auto" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
};

export default Carousel;
