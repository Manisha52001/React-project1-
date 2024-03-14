import React, { Fragment } from 'react'

const TodoList = ({items, handleDelete, handleUpdate}) => {
  return (

    <section className='todo'>
      <h2>Courses</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course</th>
            <th>Trainer</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.length>0 && items.map(item=>{
            return <Fragment key = {item.id}>
              <tr>
                <td>{item.id.slice(0,7)}</td>
                <td>{item.course}</td>
                <td>{item.trainer}</td>

                <td>
                  <button id='delete' onClick={()=>handleDelete(item.id)}>Delete</button>
                  <button id='update' onClick={()=>handleUpdate(item.id)}>Update</button>
                </td>
              </tr>
              
            </Fragment>
          })}
        </tbody>
      </table>
    </section>
  )
}

export default TodoList