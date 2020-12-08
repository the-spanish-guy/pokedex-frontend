import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://samplepokedex.herokuapp.com",
});

const getPokemons = async (nameOrId = null) => {
  try {
    if(nameOrId) {
      const { data: { data: res } } = await pokeApi.get(`/${nameOrId}`)
      return res
    }
    const { data: { data: res } } = await pokeApi.get("/")
    console.log(res)
    return res
  } catch (error) {
    console.log("[ERROR] Erro while get info from api", error)
  }
};

const getSpecificPokemons = async (nameOrId) => {
  try {
    const { data: { data: res } } = await pokeApi.get(`/${nameOrId}`)
    return res
  } catch (error) {
    console.log("[ERROR] Erro while get info from api", error)
  }
};

const getDataOfPokemon = async (id) => {
  try {
    const { data } = await pokeApi.get(`/pokemon/${id}`)
    return data
  } catch (error) {
    console.log("[ERROR] Erro while get info from api", error)
  }
};


export {
  getPokemons,
  getDataOfPokemon,
  getSpecificPokemons
};
