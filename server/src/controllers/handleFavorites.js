let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const id = req.params;

  const filteredCharacters = myFavorites.filter((char) => char.id !== Number(id));

  return res.status(200).json(filteredCharacters);
};

module.exports = { postFav, deleteFav };
