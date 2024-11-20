import axiosInstance from "./Axios";

// Register API call
export const register = async (registerId) => {
  try {
    const response = await axiosInstance.post("/register", { registerId });
    return response; // Return only the response data
  } catch (error) {
    console.error("Register API Error:", error.message);
    throw error; // Re-throw the error to handle it further up the chain
  }
};

// Submit Form API call
export const submitform = async (formData) => {
  try {
    const response = await axiosInstance.post("/form", formData, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return response.data;
  } catch (error) {
    console.error("Submit Form API Error:", error.message);
    throw error;
  }
};

// Fetch Patients Data API call
export const patientsData = async () => {
  try {
    const response = await axiosInstance.get("/patientsList");
    return response.data;
  } catch (error) {
    console.error("Patients Data API Error:", error.message);
    throw error;
  }
};

// Get Patient by ID API call
export const getPatientById = async (id) => {
  try {
    const response = await axiosInstance.get(`/singleview/${id}`);
    return response.data;
  } catch (error) {
    console.error("Get Patient By ID API Error:", error.message);
    throw error;
  }
};

// Submit Authorization Request API call
export const submitAuthorizationRequest = async ({ id, ...formData }) => {
  try {
    const response = await axiosInstance.post(`/authorize/${id}`, formData);
    return response.data;
  } catch (error) {
    console.error("Submit Authorization Request API Error:", error.message);
    throw error;
  }
};

// Fetch Authorization Data API call
export const authData = async (id) => {
  try {
    const response = await axiosInstance.get(`/authData/${id}`);
    return response.data;
  } catch (error) {
    console.error("Auth Data API Error:", error.message);
    throw error;
  }
};
