// src/pages/Register.jsx

import React, { useState } from 'react';
import { registerUser } from '../services/api'; // Ensure this is imported

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ email, password });
      // Use response to set a message or handle success/failure
      setMessage(response.message || 'Registration successful. Please log in.');
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  // Define inline styles
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      backgroundColor: '#1f2937', // Dark gray background
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    h1: {
      textAlign: 'center',
      color: '#ffffff', // White text
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      marginBottom: '15px',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#3f4b5a', // Darker gray for inputs
      color: '#ffffff', // White text for inputs
      fontSize: '16px',
    },
    inputFocus: {
      outline: 'none',
      border: '2px solid #fbbf24', // Yellow outline on focus
    },
    button: {
      padding: '10px',
      backgroundColor: '#fbbf24', // Yellow button
      color: '#1f2937', // Dark text on button
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#eab308', // Slightly darker yellow on hover
    },
    message: {
      textAlign: 'center',
      marginTop: '15px',
      color: '#ffffff', // White text for messages
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Register</h1>
      <form style={styles.form} onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          style={styles.input}
          onFocus={(e) => (e.target.style.border = styles.inputFocus.border)}
          onBlur={(e) => (e.target.style.border = 'none')}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          style={styles.input}
          onFocus={(e) => (e.target.style.border = styles.inputFocus.border)}
          onBlur={(e) => (e.target.style.border = 'none')}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Register
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default Register;
