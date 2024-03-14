import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import "./global.css";
import TodoList from './components/TodoList';

const App = () => {
  let [state, setState] = useState({
    items: [],
    course: "",
    trainer: "",
    id: uuidv4(),
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      let newItem = {
        id: state.id,
        course: state.course,
        trainer: state.trainer,
      };
    console.log(state);
    let finalItem = [...state.items, newItem];

    setState({
      items: finalItem,
      id: uuidv4(),
      course: "",
      trainer: "",
    });

    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = (id) => {
    let filteredItem = state.items.filter(item => item.id!==id)
    setState({...state, items:filteredItem})
  }

  let handleUpdate = (id) => {
    let restItems = state.items.filter(item => item.id!==id)
    let selectedItem = state.items.find(item => item.id==id)
    setState({
      ...state,
      items: restItems,
      course: selectedItem.course,
      trainer: selectedItem.trainer
    })
  }

  return (
    <>
      <article>
        <header>
          <h1>ToDo List</h1>
        </header>

        <main>
          <Form
            course={state.course}
            trainer={state.trainer}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <TodoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </main>
      </article>
    </>
  )
}

export default App