import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // For retrieving patient ID from URL
import { authData, getPatientById } from '../API/PatientApi'; // Mock API call to fetch single patient data

const SinglePatientView = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [authDetails, setAuthDetails] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await getPatientById(id);
        console.log(response,"ppp")
        setPatient(response);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatient();
  }, [id]);

  useEffect(()=>{
    const fetchData = async ()=>{
    try {
      const response = await authData(id)
      console.log(response,"rr");
      
      if (response) {
        setAuthDetails(response)
      }
    } catch (error) {
      console.log(error.message);
      
    }
    };
    fetchData()
  },[])

  // If patient data is still loading, show a loading message
  if (!patient) return <p>Loading patient details...</p>;
console.log(patient,"patient")
  return (
    <div className="container mx-auto p-4 m-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Data's OF {patient.name}</h2>
          <p className="text-gray-600 mb-2">Age: {patient.age}</p>
          <p className="text-gray-600 mb-2">Condition: {patient.condition}</p>
          <p className="text-gray-600 mb-4">Medical History: {patient.medicalHistory}</p>
          <p className="text-gray-600 mb-4">Treatment Plan: {patient.treatmentPlan}</p>

          {patient.isAuthorized ? (
            <div className="bg-green-100 p-4 rounded-md text-green-800">
              <h3 className="font-semibold text-lg text-center">Authorization Details</h3>
              {authDetails ? (
                <>
                  <p><strong>Treatment Type :</strong> {authDetails.treatmentType}</p>
                  <p><strong>Insurance Plan :</strong> {authDetails.insurancePlan}</p>
                  <p><strong>Date Of Service :</strong> {authDetails.dateOfService}</p>
                  <p><strong>Diagnosis Code :</strong> {authDetails.diagnosisCode}</p>
                  <p><strong>Doctor Notes :</strong> {authDetails.doctorNotes}</p>
                </>
              ) : (
                <p>No additional details available.</p>
              )}
            </div>
          ) : (
            <div>              
              <Link to={`/authorize/${id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Authorize Patient
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePatientView;
