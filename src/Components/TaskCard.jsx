import React from 'react';
import './TaskCard.css';

const TaskCard = ({ name, description, time }) => {
  return (
    <li className='card'>
      <div className='card-head'>
        <h3 className='task-name'>name</h3>
        <i className='fa-solid fa-check'></i>
      </div>

      <div className='task-info'>
        <p className='task-desc'>
          Learn all about react and state managment and state and every ting
        </p>
        <span className='task-time'>4:50pm</span>
      </div>
      
      <div className='icons'>
        <i className='fa-solid fa-pen-to-square'></i>
        <i className='fa-solid fa-trash-can'></i>
      </div>
    </li>
  );
};

export default TaskCard;
