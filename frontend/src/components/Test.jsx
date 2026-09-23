import React, { useState } from "react";

const Test = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResponse(null);
    setError(null);

    try {
      const res = await fetch("http://localhost:8000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setResponse(data);
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Test API Error and Response</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type={show ? "text" : "password"}
          placeholder="Enter Your Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="button" onClick={() => setShow((prev) => !prev)}>
          {show ? "Hide Password" : "Show Password"}
        </button>

        <button type="submit">Submit Form</button>
      </form>

      {response && (
        <div>
          <h3>Success Response</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div>
          <h3>Error</h3>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
};

export default Test;
