import React from 'react';
import './App.css';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Header from './components/Header';
import TaskFilters from './components/TasksFilter';
import randColor from './utils';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      task: {
        id: 0,
        name: '',
        time: '',
        desc: '',
        done: false,
      },
      tasks: [],
      filteredTasks: [],
      selectedFilter: 'all',
    };
  }

  handleToggle = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  addId = () => {
    const { name, time, desc, done } = this.state.task;
    this.setState({
      task: {
        id: Math.floor(Math.random() * 1000),
        name,
        time,
        desc,
        done,
      },
    });
  };

  addName = (e) => {
    const { time, desc, done } = this.state.task;
    this.setState({
      task: {
        id: this.addId,
        name: e.target.value,
        time,
        desc,
        done,
      },
    });
  };
  addTime = (e) => {
    const { id, name, desc, done } = this.state.task;
    this.setState({
      task: {
        id,
        name,
        time: e.target.value,
        desc,
        done,
      },
    });
  };
  addDesc = (e) => {
    const { id, time, name, done } = this.state.task;
    this.setState({
      task: {
        id,
        name,
        time,
        desc: e.target.value,
        done,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.state.tasks.push({ ...this.state.task, color: randColor() });
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
      filteredTasks: prevState.tasks,
    }));
  };

  deleteTask = ({ target: { id } }) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== +id),
    }));
  };

  editTask = ({ target: { id } }) => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  finishTask = ({ target: { id } }) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        if (task.id === +id) {
          task.done = !task.done;
          return task;
        }

        return task;
      }),
    });
  };

  filterFinishedTasks = ({ target }) => {
    this.setState(({ tasks }) => ({
      filteredTasks: tasks.filter((task) => task.done),
      selectedFilter: target.id,
    }));
  };

  filterTodoTasks = ({ target }) => {
    this.setState(({ tasks }) => ({
      filteredTasks: tasks.filter((task) => !task.done),
      selectedFilter: target.id,
    }));
  };

  getAllTasks = ({ target }) => {
    this.setState(({ tasks }) => ({ filteredTasks: tasks, selectedFilter: target.id }));
  };

  render() {
    const { isToggleOn, filteredTasks, selectedFilter } = this.state;
    return (
      <div className='App'>
        <Header handleToggle={this.handleToggle} />

        <TaskFilters
          handleFinishedTasks={this.filterFinishedTasks}
          handleTodoTasks={this.filterTodoTasks}
          handleAllTasks={this.getAllTasks}
          selectedFilter={selectedFilter}
        />

        {isToggleOn ? (
          <Form
            handleToggle={this.handleToggle}
            addName={this.addName}
            addTime={this.addTime}
            addDesc={this.addDesc}
            addId={this.addId}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          ''
        )}

        <Tasks
          tasks={filteredTasks}
          finishTask={this.finishTask}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
        />
      </div>
    );
  }
}

export default App;

// done Header => title + button(create todo)
// done TaskCard (name,time,desc,edit,delete,doneIcon)
// done todo Tasks => TaskCard
// done form (name,time,desc,submitBtn)

// todo done todos component
// todo uncompleted todos component
// todo all todos component
