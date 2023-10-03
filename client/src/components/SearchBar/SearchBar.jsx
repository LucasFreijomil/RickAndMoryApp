import Styles from "../SearchBar/SearchBar.module.css"
import { useState } from 'react';


const SearchBar = ({onSearch, randomOnSearch}) => {
  const [id, setId] = useState("")

  const handleChange = (event) => {
    const { value } = event.target;
    setId(value)
  }

  return (
    <div className={Styles.searchBar}>
      <input className={Styles.searchBarInput} type="search" placeholder="Buscar..." onChange={handleChange} value={id}/>
      <button onClick={() => {onSearch(id); setId('')}}>Add</button>
      <button onClick={() => {randomOnSearch(); setId('')}}>Random</button>
      

    </div>
  );
}

export default SearchBar;