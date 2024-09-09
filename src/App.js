import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Composent/NavBar/Navbar';
import HomePage from './Pages/HomePage';
import ForEachAcademy from './Pages/ForEachAcademy';
import FormationDetail from './Pages/FormationDetail';
import Footer from './Footer/Footer';
import DataConnexion from './Pages/DataConnexion';

import './App.css'; 

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <main>
          <Routes>       
             
            <Route path="/" element={<HomePage />} />
            <Route path="/foreach-academy" element={<ForEachAcademy />} />
            <Route path="/formations/:id" element={<FormationDetail />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/users/:role" element={<DataConnexion />} />
          

          </Routes>
        </main>
        <Footer>
          
        </Footer>
      </div>
</Router>
  );
}

export default App;
