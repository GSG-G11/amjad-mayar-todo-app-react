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
      task : {
        id:Math.floor(Math.random()*1000),
        name:'',
        time:'',
        desc:'',
        done:false,
      },
      tasks : []
    };
  
  }

  handleToggle = (e)=> {
    e.preventDefault();
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  
  addName =(e)=>{
    const {time , desc , done} = this.state.task;
    this.setState({
      task : {
        name: e.target.value,
        time,
        desc,
        done,
      }
    })
  }
  addTime =(e)=>{
    const {name , desc , done} = this.state.task;
    this.setState({
      task : {
        name,
        time: e.target.value,
        desc,
        done,
      }
    })
  }
  addDesc =(e)=>{
    const {time , name , done} = this.state.task;
    this.setState({
      task : {
        name,
        time,
        desc :e.target.value,
        done,
      }
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    this.state.tasks.push(this.state.task)
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  render() {
    const { isToggleOn , tasks} = this.state;
    return (
      <div className='App'>
        <Header handleToggle={this.handleToggle} />
        {isToggleOn ? <Form handleToggle={this.handleToggle} addName={this.addName} addTime={this.addTime} addDesc={this.addDesc} handleSubmit={this.handleSubmit}/> : ''}
        <Tasks tasks={tasks}/>
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
