import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import InputDate from '../components/Input Data';
import Cards from '../components/Cards';
import { FaPlus, FaSignOutAlt } from 'react-icons/fa';

const Home = () => {
    const [isAddingTask, setIsAddingTask] = useState(false);

    const [tasks, setTasks] = useState([
        { title: 'Task 1', description: 'This is task 1', status: 'incomplete' },
        { title: 'Task 2', description: 'This is task 2', status: 'completed' },
        { title: 'Task 3', description: 'This is task 3', status: 'important' },
    ]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, { ...newTask, status: 'incomplete' }]); 
        setIsAddingTask(false); 
    };

    const handleLogout = () => {
        
        console.log("Logging out...");
    };

    return (
        <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
            <div className="bg-gray-800 p-4 w-1/4 h-full">
                
                <h2 className="text-lg mb-4">User Email: user@example.com</h2>
                <ul className="space-y-2">
                    <li>
                        <a href="/" className="text-gray-300 hover:text-white">All Tasks</a>
                    </li>
                    <li>
                        <a href="/incompletedTasks" className="text-gray-300 hover:text-white">Incomplete Tasks</a>
                    </li>
                    <li>
                        <a href="/importantTasks" className="text-gray-300 hover:text-white">Important Tasks</a>
                    </li>
                    <li>
                        <a href="/completedTasks" className="text-gray-300 hover:text-white">Completed Tasks</a>
                    </li>
                </ul>
                <button 
                    onClick={() => setIsAddingTask(true)} 
                    className="bg-blue-500 text-white p-2 rounded flex items-center mt-4">
                    <FaPlus className="mr-2" /> Add Task
                </button>
                <button 
                    onClick={handleLogout} 
                    className="bg-red-500 text-white p-2 rounded flex items-center mt-4">
                    <FaSignOutAlt className="mr-2" /> Log Out
                </button>
            </div>
            <div className="flex-1 p-4 overflow-auto">
                <h1 className="text-2xl font-semibold mb-4">Task Manager</h1>

                
                {isAddingTask && (
                    <InputDate onAdd={handleAddTask} closePopup={() => setIsAddingTask(false)} />
                )}

                
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">All Tasks</h2>
                    <Cards tasks={tasks} />
                </div>

                
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Incomplete Tasks</h2>
                    <Cards tasks={tasks.filter(task => task.status === 'incomplete')} />
                </div>

                
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Important Tasks</h2>
                    <Cards tasks={tasks.filter(task => task.status === 'important')} />
                </div>

                
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Completed Tasks</h2>
                    <Cards tasks={tasks.filter(task => task.status === 'completed')} />
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default Home;
