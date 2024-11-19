import React, { useState, useEffect } from 'react';
import { patientsData } from '../API/PatientApi'; 
import { Link } from 'react-router-dom'; 

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await patientsData();
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 lg:p-12 max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center p-4">PATIENTS DASHBOARD</h2>
      <input
        type="text"
        placeholder="Search by name"
        className="border p-2 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="overflow-x-auto ">
         <Link to={"/form"}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        submit form
                      </button>
                    </Link>
        <table className="w-full  bg-white border border-gray-200">
          <thead>
            <tr className="w-full md:w-1/2 lg:w-1/3  border-b">
              <th className=" text-center text-gray-600">Name</th>
              <th className=" text-center text-gray-600">Age</th>
              <th className=" text-center text-gray-600">Condition</th>
              <th className=" text-center text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map(patient => (
                <tr key={patient._id} className=" border-b hover:bg-gray-100">
                  <td className="py-3 px-4 text-center ">{patient.name}</td>
                  <td className="py-3 px-4 text-center">{patient.age}</td>
                  <td className="py-3 px-4 text-center">{patient.condition}</td>
                  <td className="py-3 px-4 text-center">
                    <Link to={`/singleview/${patient._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-gray-500 text-center">No patients found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
