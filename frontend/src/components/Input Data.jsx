import React, { useState } from 'react';

const InputDate = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description) {
            onAdd({ title, description }); // Call the function passed from the parent
            setTitle(''); // Clear the input
            setDescription(''); // Clear the input
        }
    };

    return (
        <div className="p-4 bg-gray-800 rounded">
            <h2 className="text-lg text-white">Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mb-2 rounded bg-gray-600 text-white border border-gray-500"
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 mb-2 rounded bg-gray-600 text-white border border-gray-500"
                />
                <button type="submit" className="bg-blue-500 p-2 rounded">Add Task</button>
            </form>
        </div>
    );
};

export default InputDate;
