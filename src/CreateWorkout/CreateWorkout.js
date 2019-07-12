import React from 'react';
import './CreateWorkout.css'

class CreateWorkout extends React.Component {
  state = {
    exercises: 1
  }

  handleButtonClick = (e) => {
    e.preventDefault();
    console.log('Click button');
    let count = this.state.exercises + 1;
    this.setState({exercises: count})
  }

  renderInputs = () => {
    let inputs = [];
    for (let i = 0; i < this.state.exercises; i++) {
      inputs.push(
        <div key={i}>
          <label htmlFor="exercise">Exercise</label>
          <input name="exercise" id="exercise" type="text" />
          <label htmlFor="sets">Sets</label>
          <input name="sets" id="sets" type="text" />
          <label htmlFor="reps">Reps</label>
          <input name="reps" id="reps" type="text" />
        </div>
      )
    }
    return inputs;
  }

  render() {
    console.log(this.state.exercises);
    return (
      <div className="create-workout">
        <form>
          {this.renderInputs()}
          <button onClick={this.handleButtonClick}>Add Exercise</button>
        </form>
        <button className="create">Create Workout</button>
      </div>
    )
  }
}

export default CreateWorkout;