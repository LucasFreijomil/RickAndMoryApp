const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${URL}/${id}`);
    const { name, gender, species, origin, image, status } = response.data;

    let character = {
      id: id,
      name: name,
      gender: gender,
      species: species,
      origin: origin,
      image: image,
      status: status,
    };
    res.status(200).json(character);

  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = { getCharById };
