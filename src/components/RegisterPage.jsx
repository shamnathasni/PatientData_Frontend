// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../API/PatientApi';
import { Link } from 'react-router-dom'; 


const LoginPage = () => {
  const navigate = useNavigate();
  const [registerId, setRegisterId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!registerId) {
      setMessage('Please enter a Register ID.');
      return;
    }

    // Send a POST request to the backend
    try {
      const response = await register(registerId );
      console.log(response,88);
       // Send an object if needed
      if (response && response.data) { // Check if response has data
        const { token } = response.data; // Extract token directly from response.data
        if (token) {
          localStorage.setItem('jwtToken', token);
          setMessage('Token generated successfully!');
          navigate('/patientslist'); // Navigate after setting the token
        } else {
          setMessage('Token not found in response.');
        }
      } else {
        setMessage('Unexpected response structure.');
      }
    } catch (error) {
      setMessage('Error generating token.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <h1 className="text-xl font-bold mb-4">Enter your Register ID</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center '>
          <input
            type="text"
            placeholder="Enter your Register ID"
            value={registerId}
            onChange={(e) => setRegisterId(e.target.value)}
            className="border p-2 mb-4 w-full rounded-md"
            required
          />
          <button type="submit" className="bg-blue-500 text-white  py-2 px-9 rounded hover:bg-blue-600 transition text-center">
            Enter
          </button>
          
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
