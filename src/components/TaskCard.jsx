import React from 'react';
import './styles/TaskCard.css';
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
function randColor() {
  let hex = '#';

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }

  return hex;
}

const TaskCard = ({ name, desc, time , handleToggleEdit , id }) => {
  let color =  randColor() ;
  return (
    <li className='card' id={id} style={{ borderColor: color }} >
      <div className='card-head'>
        <h3 className='task-name'>{name}</h3>
        <i className='fa-solid fa-check'></i>
      </div>

      <div className='task-info'>
        <p className='task-desc'>{desc}</p>
        <span className='task-time'>time: {time}h</span>
      </div>

      <div className='icons'>
        <i className='fa-solid fa-pen-to-square' style={{ color  }} onClick={handleToggleEdit}></i>
        <i className='fa-solid fa-trash-can' style={{ color  }}></i>
      </div>
    </li>
  );
};

export default TaskCard;
