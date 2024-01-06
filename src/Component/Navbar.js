import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthentificated, whoIsAuthentificated } from '../services/auth';
import localStorageService from '../services/localStorageService';

const menuItems = [
  { label: 'Home', url: '/', icon: 'fas fa-home' },
  { label: 'Bouquets', url: '/bouquets', icon: 'fas fa-bouquet' },
  { label: 'Fleurs', url: '/fleurs', icon: 'fas fa-leaf' },
  { label: 'Mon Compte', url: '/moncompte', icon: 'fas fa-user' },
];

const Navbar = () => {
  const isAuthenticated = isAuthentificated();
  const authenticatedLabel = whoIsAuthentificated();

  const handleLogout = () => {
    localStorageService.removeItem('isAuthenticated');
    localStorageService.removeItem('userName');
    window.location.href = '/';
  };

  return (
    <>
      <header className="z-50 rgb(234, 9, 133)">
        <div className="wrapper">
          <img className='navbar-brand h-10 w-10' src='http://localhost:5000/images/Logo.webp' alt='Logo'/>
          <i className="toggle-btn fas fa-bars"></i>
          <nav className="nav-menus">
            <ul className='d-flex justify-content-center align-items-center'>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.url}>
                    <i className={item.icon}></i> {item.label === 'Mon Compte' ? (isAuthenticated ? authenticatedLabel : item.label) : item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="navbar-right">
            {isAuthenticated && (
                <li>
                  <button onClick={handleLogout} className="">
                    <i className='fa-solid fa-arrow-right-from-bracket mr-1'></i>Déconnecter
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;