import Card from "../Card/Card";
import Styles from "../CardContainer/Cards.module.css"

const Cards = ({ characters, onClose }) => {
  return (
    <div className={Styles.cardContainer}>
      {characters.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            status={char.status}
            origin={char.origin.name}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards;
