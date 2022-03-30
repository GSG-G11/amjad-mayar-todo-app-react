import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  
  handleToggle(e){
    e.preventDefault()
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render(){
    const {isToggleOn} = this.state;
    return (
      <div className='App'>
        <Header handleToggle={this.handleToggle}/>
        { isToggleOn ? <Form handleToggle={this.handleToggle}/> : ''}
      </div>
      )
  }
}

export default App;

// todo Header => title + button(create todo)
// todo TaskCard (name,time,desc,edit,delete,doneIcon)
// todo Tasks => TaskCard
// todo form (name,time,desc,submitBtn)
