// src/App.js

import React from "react";
import Home from "./pages/home";  
import AllTasks from "./pages/All tasks";    
import ImportantTasks from "./pages/Important tasks";  
import CompletedTasks from "./pages/Completed tasks";  
import IncompleteTasks from "./pages/Incompleted tasks";  
import Login from "./pages/login";  
import Register from "./pages/Register"; // Importing Register page
import ForgotPassword from "./pages/ForgotPassword"; // Importing Forgot Password page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/allTasks" element={<AllTasks />} />
          <Route path="/importantTasks" element={<ImportantTasks />} />
          <Route path="/completedTasks" element={<CompletedTasks />} />
          <Route path="/incompleteTasks" element={<IncompleteTasks />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
