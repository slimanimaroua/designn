import React, { useEffect, useState } from 'react';
import apiRequest from '../services/api';
import localStorageService from '../services/localStorageService';
import Carousel from './Carousel';

function Fleur() {
  const [fleurs, setFleurs] = useState([]);
  const isAuthenticated = localStorageService.getItem('isAuthenticated') || false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiRequest('http://localhost:5000/api/fleurs', 'GET');
        setFleurs(data);
      } catch (error) {
        console.error('Error fetching bouquets:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
  <div>
    <Carousel />
    <div className='mt-24'>
      <div className="flex flex-wrap justify-between w-full wrapper">
        {fleurs.map((fleur, index) => (
        <div className="card card-custom bg-white border-white border-0 mb-10" key={index}>
        <div className="card-custom-img" style={{ backgroundImage: `url(http://localhost:5000${fleur.image})` }}></div>
        <div className="card-body" style={{ overflowY: 'auto' }}>
          <h4 className="card-title">{fleur.nom}</h4>
          <p className="card-text">{fleur.description}</p>
        </div>
        <div className="card-footer self-end p-4" style={{ background: 'inherit', borderColor: 'inherit' }}>
            {isAuthenticated ? fleur.prix : ''} {isAuthenticated ? 'DZD' : ''}
          </div>
      </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Fleur;