import Styles from "./Card.module.css"
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({ id, name, image, onClose }) => {
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);
   const { pathname } = useLocation(); // '/favorites'
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav({ id, name, image, onClose }));
         // dispatch(addFav({id: 23, name: 'Dai', image:'img.jpg', onClose: fn(){...}}))
      }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={Styles.card}>
         
         <div className={Styles.cardButton}>
         {
            pathname !== '/favorites'
            ? <button onClick={() => onClose(id)}>X</button>
            : ''
         }
         </div>
         <br />
         <br />
         <img className={Styles.cardImage} src={image} alt={name} /> 
         <br />
         <br />
         {
         isFav ? (<button onClick={handleFavorite}>❤️</button>) 
         : (<button onClick={handleFavorite}>🤍</button>)
         }
         <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>
     
       
      </div>
   );
}

const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
};

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character)=> dispatch(addFav(character)),
      removeFav: (id)=> dispatch(removeFav(id))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)