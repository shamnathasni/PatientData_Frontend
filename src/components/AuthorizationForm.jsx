// frontend/src/components/PriorAuthorizationForm.js
import React, { useState } from 'react';
import { submitAuthorizationRequest } from '../API/PatientApi';
import { useNavigate, useParams } from 'react-router-dom';

const AuthorizationForm = () => {
    const { id } = useParams()
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    treatmentType: '',
    insurancePlan: '',
    dateOfService: '',
    diagnosisCode: '',
    doctorNotes:" "
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await submitAuthorizationRequest({id, ...formData});
    console.log(response,);
    
    if (response) {
        alert(response.data.alert)
        navigate("/")
    }
    // Optionally reset form or show success message
  };

  return (
    <form className="w-full max-w-lg mx-auto p-4 border" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Prior Authorization Request</h2>
      <label className="block mb-2">
        Treatment Type:
        <input type="text" name="treatmentType" value={formData.treatmentType} onChange={handleChange} className="border p-2 w-full" required />
      </label>
      <label className="block mb-2">
        Insurance Plan:
        <input type="text" name="insurancePlan" value={formData.insurancePlan} onChange={handleChange} className="border p-2 w-full" required />
      </label>
      <label className="block mb-2">
        Date of Service:
        <input type="date" name="dateOfService" value={formData.dateOfService} onChange={handleChange} className="border p-2 w-full" required />
      </label>
      <label className="block mb-2">
        Diagnosis Code:
        <input type="text" name="diagnosisCode" value={formData.diagnosisCode} onChange={handleChange} className="border p-2 w-full" required />
      </label>
      <label className="block mb-2">
      Doctor Notes:
        <input type="text" name="doctorNotes" value={formData.doctorNotes} onChange={handleChange} className="border p-2 w-full" required />
      </label>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4">Submit Request</button>
    </form>
  );
};

export default AuthorizationForm;
