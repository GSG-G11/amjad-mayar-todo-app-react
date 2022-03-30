import React from 'react';
import TaskCard from './TaskCard';
import './styles/Tasks.css';

const Tasks = ({tasks}) => {
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
