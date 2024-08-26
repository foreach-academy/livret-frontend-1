import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ForEachAcademy from './ForEachAcademy';
import FormationDetail from './FormationDetail';
import Login from './Components/Login'
import Footer from './Footer';
import DataConnexion from './DataConnexion';
import ModuleDetails from './Components/ModuleDetails';
import ModuleList from './Components/ModuleList';


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
            <Route path="/module/details" element={<ModuleDetails/>} />
            <Route path="/moduleList" element={<ModuleList/>} />
          

          </Routes>
        </main>
        <Footer>
          
        </Footer>
      </div>
</Router>
  );
}

export default App;
