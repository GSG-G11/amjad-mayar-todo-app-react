import React from 'react';
import TaskCard from './TaskCard';
import './styles/Tasks.css';

const Tasks = ({ finishTask, deleteTask, editTask, tasks }) => {
  if (!tasks.length) return <p className='noTasks'>No Tasks To Show</p>;

  return (
    <div className='container'>
      <p className='tasksNum'>{`you have  ${tasks.length} tasks to finish today`}</p>

      <ul className='grid'>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
            handleFinishTask={finishTask}
            handleDeleteTask={deleteTask}
            handleEditTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
