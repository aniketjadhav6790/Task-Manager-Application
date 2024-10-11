// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks'; // Replace with your actual API URL
const AUTH_URL = 'http://localhost:5000/api/auth'; // Replace with your authentication API URL

// Function to get all tasks
export const getAllTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data; // Ensure this returns the correct data format
};

// Function to create a new task
export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data; // Ensure this returns the created task data
};

// Function to delete a task
export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data; // Ensure this returns the deleted task data or confirmation
};

// Function to log in a user
export const loginUser = async (credentials) => {
  const response = await axios.post(`${AUTH_URL}/login`, credentials);
  return response.data; // Ensure this returns the logged-in user's data or token
};

// Function to register a user
export const registerUser = async (userData) => {
  const response = await axios.post(`${AUTH_URL}/register`, userData);
  return response.data; // Ensure this returns the registered user's data or token
};

// Function to send a password reset email
export const forgotPassword = async (email) => {
  const response = await axios.post(`${AUTH_URL}/forgot-password`, { email });
  return response.data; // Ensure this returns the appropriate response
};
