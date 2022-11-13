import React from "react";
//import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import { createRoot } from 'react-dom/client';
import Appointment from "./components/Appointment";

import {BrowserRouter as Router, 
    Routes,
    Navigate,
    Route} from "react-router-dom";
import ListAppointments from "./components/ListAppointments";

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Router>
    <Routes>
      <Route path="/appointment" element={<Appointment/>}/>
      <Route path="/ListAppointments" element={<ListAppointments/>}/>
    </Routes>
    </Router>);