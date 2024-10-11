import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaCheckCircle, FaExclamationCircle, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ email }) => {
  return (
    <div className="bg-gray-800 p-4 h-full w-1/4">
      
      <div className="mb-4 text-gray-300">
        <h2 className="text-xl font-semibold">User: {email}</h2>
        <button className="mt-2 text-red-400 hover:text-white flex items-center">
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>

      
      <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center text-gray-300 hover:text-white">
            <FaTasks className="mr-2" />
            All Tasks
          </Link>
        </li>
        <li>
          <Link to="/importantTasks" className="flex items-center text-gray-300 hover:text-white">
            <FaExclamationCircle className="mr-2" />
            Important Tasks
          </Link>
        </li>
        <li>
          <Link to="/completedTasks" className="flex items-center text-gray-300 hover:text-white">
            <FaCheckCircle className="mr-2" />
            Completed Tasks
          </Link>
        </li>
        <li>
          <Link to="/incompleteTasks" className="flex items-center text-gray-300 hover:text-white">
            <FaExclamationCircle className="mr-2" />
            Incomplete Tasks
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
