import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: [...state.myFavorites, action.payload], allCharactersFav: [...state.allCharactersFav, action.payload] };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case FILTER:
      const filterByGender = [...state.allCharactersFav].filter(
        (favorite) => favorite.gender === action.payload
      );

      return {
        ...state,
        myFavorites: filterByGender,
      };

    case ORDER:
      const favoritesOrdered =
        action.payload === "A"
          ? [...state.allCharactersFav].sort((a, b) => a.id - b.id)
          : [...state.allCharactersFav].sort((a, b) => b.id - a.id);

      return {
        ...state,
        myFavorites: favoritesOrdered,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
