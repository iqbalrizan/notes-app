
import { useState, useEffect } from 'react';
import './App.css';
import Noteslist from './components/Noteslist';
import {nanoid} from "nanoid"
import Search from './components/Search';

function App() {
   const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "My first Note",
    date : "2/09/22",
    
   },
   
  ])


  const [searchText, setSearchText] = useState("")


  
	
	

  useEffect(() => {
		const inidata = localStorage.getItem('dataItem')
    console.log(inidata)
    const user =  JSON.parse(
			inidata
      );
      console.log(user)
   if(user){
    setNotes(user);
  }
			
		
	}, []);

	
 


  const deleteNotes = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    localStorage.setItem("dataItem", JSON.stringify(newNotes))
    setNotes(newNotes)
  }

  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  
  
   


  return (
    <div className={`${darkMode ? "dark-mode" : null}`}>
    <div className="App">
<header>
  <h1>Notes-App</h1>
  <button onClick={handleDarkMode} className='save'>Toogle Mode</button>
</header>
      <Search  handleSearch = {setSearchText}/>

     




      <Noteslist notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
      setNotes={setNotes}
      handleDelete={deleteNotes}
      />
    </div>
    </div>
  );
}

export default App;
