import React from 'react';
import Cards from '../components/Cards';

const IncompleteTasks = ({ tasks, onEdit, onDelete }) => {
  
  const incompleteTasks = tasks.filter(task => task.status === 'incomplete');

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Incomplete Tasks</h2>
      <Cards tasks={incompleteTasks} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default IncompleteTasks;