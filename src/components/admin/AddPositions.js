import React, { useState } from 'react'
import axios from "axios"

export default function AddPositions() {

  const [position, setPosition] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      position: position,
    }

    axios.post('http://localhost:8000/api/questions/addPosition', data)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return (
    <div>
      <h1>Add Current job Position</h1>
      <form onSubmit={handleSubmit}>
        <div class="uk-margin">
          <label class="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Add Current option </label>
          <div class="uk-form-controls" style={{ marginBottom: "30px" }}>
            <input
              class="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="Job position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              style={{ width: "50%" }} />
          </div>
          <button type="submit" className="uk-button uk-button-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}
