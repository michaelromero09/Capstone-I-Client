import React from 'react';
import Exercise from '../Exercise/Exercise';

import API from '../api';

class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    }
  }

  componentWillMount() {
    console.log('fetch');
    API.getExercises()
      .then(res => {
        console.log(res);
        this.setState({ exercises: res });
      });
  }

  renderExercises() {
    return this.state.exercises.map(exercise => {
      return <Exercise key={exercise.id} exercise={exercise} />
    })
  }

  render() {
    console.log(this.state.exercises);
    return (
      <div className="workout">
        <h2>Day 1</h2>
        {this.renderExercises()}
        <button>End Workout</button>
      </div>
    )
  }
}

export default Workout;