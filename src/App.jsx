import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import PatientList from './components/PatientList';
import PatientList from './components/Form';
import AuthorizationForm from './components/AuthorizationForm';
import SinglePatientView from './components/SinglePatientView';
import RegisterPage from './components/RegisterPage';

const App = () => {
  // Function to check if user is authenticated
  const isAuthenticated = () => {
    return localStorage.getItem('jwtToken') !== null;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        
        {/* Protected Routes */}
        <Route 
          path="/patientslist" 
          element={isAuthenticated() ? <PatientList /> : <Navigate to="/" />} 
        />
        <Route 
          path="/form" 
          element={<Form />} 
        />
        <Route 
          path="/singleview/:id" 
          element={isAuthenticated() ? <SinglePatientView /> : <Navigate to="/" />} 
        />
        <Route 
          path="/authorize/:id" 
          element={isAuthenticated() ? <AuthorizationForm /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
