import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import AppLayout from './Layouts/AppLayout';
import HomePage from './Pages/Home/Index';
import UserProfile from './Pages/UserProfile/Index';
import Contracts from './Pages/Contracts/Index';
import Settings from './Pages/Settings/Index';
import CalculationStatus from './Pages/CalculationStatus/Index';
import CalorieArchive from './Pages/CalorieArchive/Index';
import UserApplications from './Pages/UserApplications/Index';
import TechnicalSupport from './Pages/TechnicalSupport/Index';
import MeasuringComplex from './Pages/MeasuringComplex/Index';
import ManagementUser from './Pages/ManagementUser/Index';
import Petition from './Pages/Petition/Index';
import Auth from './Pages/Auth/Index';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <AppLayout /> }>
            <Route index element={ <HomePage /> } />
            <Route path="userprofile" element={ <UserProfile /> } />
            <Route path="contracts" element={ <Contracts /> } />
            <Route path="settings" element={ <Settings /> } />
            <Route path="calculationStatus" element={ <CalculationStatus /> } />
            <Route path="calorieArchive" element={ <CalorieArchive /> } />
            <Route path="userApplications" element={ <UserApplications /> } />
            <Route path="technicalSupport" element={ <TechnicalSupport /> } />
            <Route path="measuringComplex" element={ <MeasuringComplex /> } />
            <Route path="managementUser" element={ <ManagementUser /> } />
            <Route path="auth" element={ <Auth /> } />
            <Route path="petition" element={ <Petition /> } />
        </Route>
      </Routes>
    </div>
  );
}
