import React from 'react';
import TaskCard from './TaskCard';
import './styles/Tasks.css';
import tasks from '../tasks';

const Tasks = () => {
  return (
    <div className='container'>
      <ul className='grid'>
        {tasks.map((task) => (
          <TaskCard {...task}/>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
