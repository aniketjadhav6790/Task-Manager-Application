import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai'; 
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Cards = ({ tasks, onEdit, onDelete }) => {
  const [updatedTasks, setUpdatedTasks] = useState(tasks); // State to manage task updates

  const toggleTaskStatus = (index) => {
    const newTasks = [...updatedTasks];
    newTasks[index].status = newTasks[index].status === 'completed' ? 'incomplete' : 'completed';
    setUpdatedTasks(newTasks); // Update the task status
  };

  const toggleFavorite = (index) => {
    const newTasks = [...updatedTasks];
    newTasks[index].isFavorite = !newTasks[index].isFavorite; 
    setUpdatedTasks(newTasks); // Update the favorite status
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {updatedTasks.map((task, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-gray-700 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold">{task.title}</h3>
            <p className="text-gray-300 my-2">{task.description}</p>
          </div>
          <div className="mt-4 w-full flex items-center">
            <button 
              className={`p-2 rounded text-white ${
                task.status === 'completed' ? 'bg-green-500' : 'bg-red-500'
              }`}
              onClick={() => toggleTaskStatus(index)} 
            >
              {task.status === 'completed' ? 'Complete' : 'Incomplete'}
            </button>
            <div className="text-white p-2 w-3/6 text-2xl flex justify-around">
              <button onClick={() => toggleFavorite(index)}>
                <AiFillHeart className={`transition-all duration-300 ${task.isFavorite ? 'text-red-500' : 'text-gray-300'}`} />
              </button>
              <button onClick={() => onEdit(index)}>
                <FaEdit />
              </button>
              <button onClick={() => onDelete(index)}>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
