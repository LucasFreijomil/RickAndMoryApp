import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";


const Nav = ({ onSearch, randomOnSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} randomOnSearch={randomOnSearch} />
      <NavLink to="/about">About</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </div>
  );
};

export default Nav;
