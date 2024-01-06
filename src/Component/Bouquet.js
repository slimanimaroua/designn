import React, { useEffect, useState } from 'react';
import apiRequest from '../services/api';
import localStorageService from '../services/localStorageService';
import Carousel from './Carousel';

const Bouquets = () => {
  const [bouquets, setBouquets] = useState([]);
  const [likedBouquets, setLikedBouquets] = useState([]);
  const [likes, setLikes] = useState([]);
  const isAuthenticated = localStorageService.getItem('isAuthenticated') || false;
  const userId = localStorageService.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {//fetchdata qui effectue une requete a une api a lurl
      try {
        const data = await apiRequest('http://localhost:5000/api/bouquets', 'GET');
        setBouquets(data);
        const likesData = await Promise.all(
          data.map(async (bouquet) => {
            const response = await apiRequest(`http://localhost:5000/likes/${bouquet.id}`, 'GET');
            return response.likes || 0;
          })
        );
        setLikes(likesData);
      } catch (error) {
        console.error('Error fetching bouquets:', error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchLikedBouquets = async () => {
      try {
        if (isAuthenticated && userId) {
          const data = await apiRequest(`http://localhost:5000/api/liked-bouquets/${userId}`, 'GET');
          setLikedBouquets(data);
          console.log('Liked Bouquets:', data);
        }
      } catch (error) {
        console.error('Error fetching liked bouquets:', error.message);
      }
    };

    fetchLikedBouquets();
  }, [isAuthenticated, userId]);

  const handleLikeToggle = async (index, id) => {
    try {
      const userId = localStorageService.getItem('userId');
  
      const isLiked = likedBouquets.includes(id);
  
      if (isLiked) {
        await apiRequest('http://localhost:5000/like', 'POST', { userId, bouquetId: id });
  
        setLikes((prevLikes) => {
          const newLikes = [...prevLikes];
          newLikes[index] = newLikes[index] - 1;
          localStorageService.setItem('likes', newLikes);
          return newLikes;
        });
  
        setLikedBouquets((prevLikedBouquets) => {
          const newLikedBouquets = prevLikedBouquets.filter((likedId) => likedId !== id);
          return newLikedBouquets;
        });
      } else {
        await apiRequest('http://localhost:5000/like', 'POST', { userId, bouquetId: id });
  
        setLikes((prevLikes) => {
          const newLikes = [...prevLikes];
          newLikes[index] = newLikes[index] + 1;
          localStorageService.setItem('likes', newLikes);
          return newLikes;
        });
  
        setLikedBouquets((prevLikedBouquets) => {
          const newLikedBouquets = [...prevLikedBouquets, id];
          return newLikedBouquets;
        });
      }
    } catch (error) {
      console.error('Error toggling like:', error.message);
    }
  };


  return (
    <div>
      <Carousel />
    <div className="flex flex-wrap justify-between w-full wrapper">
      {bouquets.map((bouquet, index) => (
        <div className="card card-custom bg-white border-white border-0 mb-10" key={index}>
          <div className="card-custom-img" style={{ backgroundImage: `url(http://localhost:5000${bouquet.image}) `}}></div>
          <div className="card-body" style={{ overflowY: 'auto' }}>
            <h4 className="card-title">{bouquet.nom}</h4>
            <p className="card-text">{bouquet.description}</p>
          </div>
          <div className="card-footer justify-between py-4" style={{ background: 'inherit', borderColor: 'inherit' }}>
            {bouquet.price} DZD
            <button className={`ml-20 ${!isAuthenticated ? 'opacity-50' : 'ml-16'}`} onClick={() => handleLikeToggle(index, bouquet.id)} disabled={!isAuthenticated}>
              <i className={`fa-solid fa-heart ${likedBouquets.includes(bouquet.id) ? 'text-red-500' : 'text-blue-500'}`}></i>
            </button>
            {isAuthenticated ? <span className='ml-1'>{likes[index]}</span> : ''}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Bouquets;