import axios from "axios";

const pokeApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const getPokemons = async (nameOrId = null) => {
  try {
    if(nameOrId) {
      const { data: { data: res } } = await pokeApi.get(`/${nameOrId}`)
      return res
    }
    const { data: { data: res } } = await pokeApi.get("/")
    return res
  } catch (error) {
    console.error("[ERROR] Erro while get info from api", error)
  }
};

const getSpecificPokemons = async (nameOrId) => {
  try {
    const { data: res } = await pokeApi.get(`/${nameOrId}`)
    return res
  } catch (error) {
    console.error("[ERROR] Erro while get info from api", error)
  }
};

const getDataOfPokemon = async (id) => {
  try {
    const { data } = await pokeApi.get(`/pokemon/${id}`)
    return data
  } catch (error) {
    console.error("[ERROR] Erro while get info from api", error)
  }
};


export {
  getPokemons,
  getDataOfPokemon,
  getSpecificPokemons
};
