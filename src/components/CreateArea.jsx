import React, { useState } from "react";

function CreateArea(props) {

  const [ notes, setNotes ] = useState({
    title:'',
    content: ''
  })

  const noteChangeHandler = (event) => {
      const { name, value } = event.target
      setNotes(prevNotes => {
        return {
          ...prevNotes,
          [name]: value
        }
      })
  }

  const noteSaveHandler = (event) => {
    event.preventDefault()
    props.onAdd(notes)
    setNotes({
      title:'',
      content: ''
    })
  }

  return (
    <div>
      <form>
        <input
          onChange={noteChangeHandler} 
          name="title" 
          placeholder="Title"
          value={notes.title} />
        <textarea
          onChange={noteChangeHandler}  
          name="content" 
          placeholder="Take a note..." 
          rows="3"
          value={notes.content} />
        <button 
          onClick={noteSaveHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
