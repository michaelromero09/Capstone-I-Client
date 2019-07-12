const BASE_URL = 'http://localhost:8000';

const API = {
  getExercises() {
    return fetch(`${BASE_URL}/exercises`)
      .then(res => res.json())
  }
}

module.exports = API;