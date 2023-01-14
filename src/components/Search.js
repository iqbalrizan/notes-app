import React from 'react'
import {FcSearch} from "react-icons/fc"

const Search = ({handleSearch}) => {

    const handleSearchBar = (e) => {
        handleSearch(e.target.value)
    }
  return (
    <div className='search'>
        <FcSearch className="search-icons" size="1.3em" />
        <input type="text" placeholder='search' onChange={handleSearchBar}/>
    </div>
  )
}

export default Search