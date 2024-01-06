import React, { useState } from 'react';
import apiRequest from '../services/api';
import localStorageService from '../services/localStorageService';

const MonCompte = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const isAuthenticated = localStorageService.getItem('isAuthenticated');
  const userName = localStorageService.getItem('userName');
// handlsubmit qui renvoie les donne au back pour verifier
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null); // Reset any previous errors

      // Validate if login and password are provided
      if (!login || !password) {
        throw new Error('Veuillez fournir un nom d\'utilisateur et un mot de passe.');
      }

      const response = await apiRequest('http://localhost:5000/login', 'POST', {
        login: login,
        password: password,
      });

      const { auth, fullName, userId } = response;

      localStorageService.setItem('isAuthenticated', auth);
      localStorageService.setItem('userName', fullName);
      localStorageService.setItem('userId', userId);
      console.log(localStorageService.getItem('isAuthenticated'), localStorageService.getItem('userName'));

      if (response.auth) {
        window.location.reload();
      } else {
        setError('Il se peut que votre nom d\'utilisateur ou mot de passe soit incorrect');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setError('Une erreur s\'est produite lors de la connexion. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className='flex flex-col items-center h-screen w-full'>
      <div className=' mb-36'>
      </div>
      {isAuthenticated ? (
        <div>
          <h2>Hello {userName}!</h2>
        </div>
      ) : (
      <form className="flex flex-col items-center mt-6 py-6 w-2/4 rounded-md shadow-lg" onSubmit={handleSubmit}>
      <div className='flex flex-col items-center mb-11'>
        <img className='h-20 w-20' src='http://localhost:5000/images/Logop.webp' alt='Logo'/>
        <h3 className='text-4xl font-bold mt-4 -mb-4'>Page de connexion</h3>
      </div>
      {error && (
          <div className="text-red-500 mb-4 flex justify-center">
            {error}
          </div>
        )}
      <div className="w-2/3 mb-2">
    <label
      htmlFor="login"
      className="block text-sm font-semibold text-gray-800"
    >
      Nom d'utilisateur
    </label>
    <input
      type="text"
      id="login"
      value={login}
      onChange={(e) => setLogin(e.target.value)}
      required
      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
    />
  </div>
  <div className="w-2/3 mb-3">
    <label
      htmlFor="password"
      className="block text-sm font-semibold text-gray-800"
    >
      Mot de passe
    </label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
    />
  </div>
  <div className="w-2/6 mt-6">
    <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-800 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
      Connexion
    </button>
  </div>
</form>
)}
    </div>
  );
};

export default MonCompte;