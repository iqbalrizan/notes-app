import {useState} from 'react'
import {AiFillDelete} from "react-icons/ai"

const Note = ({text, id, date, handleDelete}) => {



  const [color, setColor] = useState('white');
  
  function handleColorChange(newColor) {
    
    setColor(newColor);
  }
  return (
    <div className={`note && ${color}`} key={id}>
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            < AiFillDelete onClick={() => handleDelete(id)} className="delete-icons" size="1.3em" />
           </div>


           <div >
      <button onClick={() => handleColorChange('red')}>Red</button>
      <button onClick={() => handleColorChange('blue')}>Blue</button>
      <button onClick={() => handleColorChange('yellow')}>Yellow</button>
      <button onClick={() => handleColorChange('green')}>Green</button>
    </div>
        </div>
  )
}

export default Note