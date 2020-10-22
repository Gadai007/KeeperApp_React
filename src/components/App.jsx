import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './CreateArea'


const App = () => {

    const [ save, setSave ] = useState([])

    const addNote = (note) => {
        setSave(prevNote => {
            return [
                ...prevNote, note
            ]
        })
    }

    const deleteHandler = (id) => {
        setSave(prevSave => {
            return prevSave.filter((note, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {save.map((note, index) => {
                return <Note 
                    key={index} 
                    id={index}
                    title={note.title} 
                    content={note.content} 
                    onDelete={deleteHandler}/>
            })}
            <Footer/>
        </div>
    )
}

export default App