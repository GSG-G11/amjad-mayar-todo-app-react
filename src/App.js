import React from 'react';
import './App.css';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Header from './components/Header';
import tasks from './tasks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      tasksData: tasks,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();

    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  deleteTask = ({ target: { id } }) => {
    this.setState((prev) => ({
      tasksData: prev.tasksData.filter((task) => task.id !== +id),
    }));
  };

  editTask = ({ target: { id } }) => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  finishTask = ({ target: { id } }) => {
    this.setState({
      tasksData: this.state.tasksData.filter((task) => {
        if (task.id === +id) {
          task.done = !task.done;
          return task;
        }

        return task;
      }),
    });
  };

  render() {
    const { isToggleOn } = this.state;
    return (
      <div className='App'>
        <Header handleToggle={this.handleToggle} />
        {isToggleOn ? <Form handleToggle={this.handleToggle} /> : ''}
        <Tasks
          finishTask={this.finishTask}
          tasks={this.state.tasksData}
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

// todo completed todos component
// todo uncompleted todos component
// todo all todos component
