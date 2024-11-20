import React, { useState } from "react";
import { submitform } from '../API/PatientApi'; 

function Form() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorMessage("");

  try {
    // Invoke submitform and pass form data
    const response = await submitform(formData);

      if (response) {
        console.log(response)
        alert(response.alert)
        navigate("/")
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    setErrorMessage(error.message);
  }
  };
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Simple React Form</h2>
      {isSubmitted ? (
        <div style={{ marginTop: "20px" }}>
          <h3>Form submitted successfully!</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <button type="submit" style={{ padding: "8px 16px" }}>Submit</button>
        </form>
      )}

      {errorMessage && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <p>Error: {errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
