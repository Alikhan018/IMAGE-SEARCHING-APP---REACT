import React, { useState } from 'react'

export default function SearchBar({handleSubmit}) {
    const [keyword, setKeyword] = useState('');
    const handleChange = (event) => {
        setKeyword(event.target.value);
    } 
    const handleForm = (event) => {
        event.preventDefault();
        handleSubmit(keyword);
    }
  return (
    <div>
    <form onSubmit={handleForm}>
      <input onChange={handleChange}/>
    </form>
    </div>
  )
}
