import React from 'react';
import './App.css';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isToggleOnEdit: false,
      task: {
        id: 0,
        name: '',
        time: '',
        desc: '',
        done: false,
      },
      tasks: [],
      id:0,
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
  }
  handleToggleEdit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      isToggleOnEdit: !prevState.isToggleOnEdit,
      id: e.target.parentNode.parentNode.id,
    }));
  };

  addName = (e) => {
    const { time, desc, done, id } = this.state.task;
    this.setState({
      task: {
        id : this.addId(),
        name: e.target.value,
        time,
        desc,
        done,
      },
    });
  };
  addTime = (e) => {
    const { name, desc, done, id } = this.state.task;
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
    const { time, name, done, id } = this.state.task;
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
    this.state.tasks.push(this.state.task);
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };
  EditTask = (e) => {
    e.preventDefault();
    const {time, desc, name} =  this.state.task
    const { id , tasks} = this.state ;
    this.setState({tasks : tasks.filter((task) => {
      if(task.id === +id){
        task.name = name;
        task.time = time ;
        task.desc =desc;
        return task
      }
      return task

    }) })
    this.setState((prevState) => ({
      isToggleOnEdit: !prevState.isToggleOnEdit,
    }));
  };
  render() {
    const { isToggleOn, tasks, isToggleOnEdit } = this.state;
    return (
      <div className="App">
        <Header handleToggle={this.handleToggle} />
        {isToggleOn ? (
          <Form
            handleToggle={this.handleToggle}
            addId={this.addId}
            addName={this.addName}
            addTime={this.addTime}
            addDesc={this.addDesc}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          ''
        )}
        {isToggleOnEdit ? (
          <Form
            handleToggle={this.handleToggleEdit}
            addName={this.addName}
            addTime={this.addTime}
            addDesc={this.addDesc}
            handleSubmit={this.EditTask}
          />
        ) : (
          ''
        )}
        <Tasks tasks={tasks} handleToggleEdit={this.handleToggleEdit} />
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
