import { connect } from "react-redux";
import Card from "../Card/Card";
import Styles from "../CardContainer/Cards.module.css";
import { filterCards, orderCards } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === "filter") {
      dispatch(filterCards(event.target.value));
    } else {
      dispatch(orderCards(event.target.value));
    }
    setAux(!aux);
  };
  return (
    <div>
      <select name="order" onChange={handleChange}>
        <option value="A">Ascendente</option>
        <option value="D">Desendente</option>
      </select>

      <select name="filter" onChange={handleChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>

      <h1>Mis favoritos!</h1>
      <div className={Styles.favorites}>
        {myFavorites.length &&
          myFavorites.map(
            ({ id, name, status, species, origin, image, gender, onClose }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  origin={origin}
                  image={image}
                  gender={gender}
                  onClose={onClose}
                />
              );
            }
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
