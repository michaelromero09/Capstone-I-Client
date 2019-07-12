import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Workout from './Workout/Workout';
import CreateWorkout from './CreateWorkout/CreateWorkout';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userStatus: "logged"
    }
  }
  
  updateUserStatus = (status) => {
    console.log('test');
    this.setState({ userStatus: status});
  }

  render() {
    console.log(`User Status: ${this.state.userStatus}`);
    return (
      <div className="App">
        <NavBar userStatus={this.state.userStatus} updateUserStatus={this.updateUserStatus}/>
        <Route path='/workout' component={Workout} />
        <Route path='/new-workout' component={CreateWorkout} />
      </div>
    );
  }
}

export default App;
