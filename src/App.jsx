import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import PatientList from './components/PatientList';
import Form from './components/Form';
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
         <Route 
          path="/form" 
          element={<Form />} 
        />
        
        {/* Protected Routes */}
        <Route 
          path="/patientslist" 
          element={ <PatientList />} 
        />
        <Route 
          path="/singleview/:id" 
          element={<SinglePatientView /> } 
        />
        <Route 
          path="/authorize/:id" 
          element={<AuthorizationForm /> } 
        />
      </Routes>
    </Router>
  );
};

export default App;
