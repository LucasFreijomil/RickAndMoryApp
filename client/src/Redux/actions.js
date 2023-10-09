import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./action-types"
import axios from "axios";


export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const response = await axios.post(endpoint, character);
      const { data } = response;

      return dispatch({
        type: ADD_FAV,
        payload: data,
      });

    } catch (error) {
      console.error("Error al agregar favorito:", error);
    }
  };
};

 export const removeFav = (id) => {
   return async (dispatch) => {
     try {
       const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
       const response = await axios.delete(endpoint);
       const { data } = response;
       return dispatch({
         type: REMOVE_FAV,
         payload: data,
       });
     } catch (error) {
       console.error("Error al eliminar favorito:", error);
     }
   };
 };

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}