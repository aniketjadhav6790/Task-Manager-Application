import React from 'react';
import Cards from '../components/Cards';

const ImportantTasks = () => {
  const tasks = [
    { title: 'Important Task 1', description: 'Important task details', status: 'important' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Important Tasks</h1>
      <Cards tasks={tasks} />
    </div>
  );
};

export default ImportantTasks;
