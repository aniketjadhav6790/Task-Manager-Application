
import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { createTask, getAllTasks } from '../services/api'; 

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' }); 

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getAllTasks(); 
        setTasks(tasksData); 
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault(); 

    if (!newTask.title || !newTask.description) {
      alert("Please provide a title and description for the task.");
      return;
    }

    try {
      const createdTask = await createTask(newTask); 
      setTasks((prevTasks) => [...prevTasks, createdTask]); 
      setNewTask({ title: '', description: '' }); 
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">All Tasks</h1>
      
     
      <form onSubmit={handleAddTask} className="mb-4">
        <input 
          type="text" 
          placeholder="Task Title" 
          value={newTask.title} 
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} 
          className="p-2 mr-2 border border-gray-300 rounded"
        />
        <input 
          type="text" 
          placeholder="Task Description" 
          value={newTask.description} 
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} 
          className="p-2 mr-2 border border-gray-300 rounded"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Task
        </button>
      </form>
      
      <Cards tasks={tasks} onEdit={() => {}} onDelete={() => {}} />
    </div>
  );
};

export default AllTasks;
