import React from 'react';
import './styles/TaskCard.css';

const TaskCard = ({ name, description, time,color }) => {
  
  return (
    <li className='card' style={{ borderColor: color }}>
      <div className='card-head'>
        <h3 className='task-name'>{name}</h3>
        <i className='fa-solid fa-check'></i>
      </div>

      <div className='task-info'>
        <p className='task-desc'>{description}</p>
        <span className='task-time'>time: {time}h</span>
      </div>

      <div className='icons'>
        <i className='fa-solid fa-pen-to-square' style={{ color }}></i>
        <i className='fa-solid fa-trash-can' style={{ color }}></i>
      </div>
    </li>
  );
};

export default TaskCard;
