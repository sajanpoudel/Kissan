import React from "react";
import { createRoot } from 'react-dom/client';
import './App.css';
import Appointment from './components/Appointment';
import {BrowserRouter as Router, 
  Routes,
  Navigate,
  Route} from "react-router-dom";
import ListAppointments from "./components/ListAppointments";

const App = () => {
  return( <Router>
  <Routes>
    <Route path="/appointment" element={<Appointment/>}/>
    <Route path="/ListAppointments" element={<ListAppointments/>}/>
  </Routes>
  </Router>
  )
};

export default App;