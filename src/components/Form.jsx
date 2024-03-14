import React from 'react'

const Form = ({ course, trainer, handleChange, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course</label>
          <input 
            type="text" 
            placeholder="Enter course"
            name="course"
            value={course}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Trainer</label>
          <input 
            type="text" 
            placeholder="Enter trainer"
            name="trainer"
            value={trainer}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button id='button'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Form