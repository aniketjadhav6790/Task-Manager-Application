import React from 'react';
import Cards from '../components/Cards';

const CompletedTasks = () => {
  const tasks = [
    { title: 'Completed Task 1', description: 'Completed task details', status: 'completed' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Completed Tasks</h1>
      <Cards tasks={tasks} />
    </div>
  );
};

export default CompletedTasks;
