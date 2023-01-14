import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const Noteslist = ({notes, handleAddNotes, handleDelete, setNotes}) => {
  return (
    <div className='notes-list'>
        {notes.map((item) => {
            return (
                <Note id={item.id}
                text={item.text}
                date={item.date}
                handleDelete={handleDelete}
                
                />
            )
        })}
       <AddNote handleAddNotes={handleAddNotes}
       notes={notes}
       setNotes={setNotes}
       />
        
    </div>
  )
}

export default Noteslist