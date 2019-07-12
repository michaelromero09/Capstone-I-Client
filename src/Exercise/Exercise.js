import React from 'react';
import './Exercise.css';

function Exercise(props) {
  return (
    <div className="exercise">
      <h4>{props.exercise.name}</h4>
      <input className="sets" type="number" defaultValue={props.exercise.sets}/>
      x
      <input className="reps" type="number" defaultValue={props.exercise.reps}/>
      <input className="weight" type="text" defaultValue={props.exercise.weight}/>
      <input className="weight-type" type="text" defaultValue={props.exercise.type}/>
      <button>Done</button>
    </div>
  )
}

export default Exercise;