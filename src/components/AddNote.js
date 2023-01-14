import React, { useState } from 'react'
import {nanoid} from "nanoid"
const AddNote = ({setNotes, notes}) => {

  const [noteText, setNoteText] = useState("")

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0){
      setNoteText(e.target.value)

    }
  }

  const charLimit = 210

  const handleSaveClick = () => {
    if(noteText.trim().length > 0) {
      const date = new Date();
      const newNote = {
        id : nanoid(),
        text : noteText,
        date : date.toLocaleDateString(),
      }
  
      const newNotes = [...notes, newNote]
      setNotes(newNotes)
      localStorage.setItem("dataItem", JSON.stringify(newNotes))
      setNoteText("")
    }
    
  }
  return (
    <div className='note newNote'>
        <textarea name="" cols="10" rows="8"
        placeholder='silahkan tambahkan note baru.....'
        value ={noteText}
        onChange={handleChange}
        
        ></textarea>
        <div className="note-footer">
            <small>{charLimit - noteText.length} kata</small>
            <button className='save' onClick={handleSaveClick}>Simpan</button>
        </div>
    </div>
  )
}

export default AddNote