import React from 'react';
import TaskCard from './TaskCard';
import './Tasks.css';

const Tasks = () => {
  return (
    <div className='container'>
      <ul className='grid'>
        {[1, 1, 1, 1, , 1, 1, 1].map((e, i) => (
          <TaskCard key={i} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
