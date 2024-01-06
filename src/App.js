import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Bouquets from './Component/Bouquet';
import Fleur from './Component/Fleurs';
import Footer from './Component/Footer';
import Home from './Component/Home';
import MonCompte from './Component/MonCompte';
import Navbar from './Component/Navbar';
import sendRequest from './services/api';
const App = () => {

  const [mesBouquets, setMesBouquets] = useState([]);
  const [mesFleurs, setMesFleurs] = useState([]);

  useEffect(() => {
    sendRequest('http://localhost:5000/api/bouquets', 'GET', null, null)
      .then(data => setMesBouquets(data))
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    sendRequest('http://localhost:5000/api/fleurs', 'GET', null, null)
      .then(data => setMesFleurs(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bouquets" element={<Bouquets bouquets={mesBouquets}/>} />
        <Route path="/fleurs" element={<Fleur fleurs={mesFleurs} />} />
        <Route path="/moncompte" element={<MonCompte />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;