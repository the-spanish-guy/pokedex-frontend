import axios from "axios";
import { getColor } from "../utils/utils";

const pokeApi = axios.create({
  baseURL: "http://localhost:3333",
});

const getAllPokemon = async () => {
  const { data } = await axios.get("/pokemon");
  return data;
};

const getSpecificPokemon = async (name) => {
  const response = await pokeApi.get(`/pokemon/${name}`);
  return response.data;
};

const getInfo = async (nameorId) => {
  const { data } = await pokeApi.get(`/pokemon-species/${nameorId}/`);
  const { name, flavor_text_entries } = data;
  const description = flavor_text_entries
    .filter((desc) => desc.language.name === "en")
    .sort((a, b) => a.version.url - b.version.url)
    .slice(-1);
  // console.log('name', name)
  // console.log('aaaa', description)

  return description[0].flavor_text;
};

const getCategory = async (nameorId) => {
  const { data } = await pokeApi.get(`/pokemon-species/${nameorId}/`);
  const { genera } = data;
  const [gena] = genera
    .filter((gen) => gen.language.name === "en")
    .map((a) => a.genus.split(" ").shift());
  return gena;
};

const getImagePokemon = async (id) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

const getColorByType = async (name) => {
  const { types } = await getSpecificPokemon(name);

  const result = getColor(types[0].type.name);
  return result;
};

const getPokemons = async () => {
  const { results, next } = await getAllPokemon();
  let pokemons = results;
  const res = [];

  pokemons
    .sort((a, b) => a.url - b.url)
    .map(async (pokemon) => {
      let poke = {};

      const po = await getSpecificPokemon(pokemon.name);
      const img = await getImagePokemon(po.id);
      const type = getColor(po.types[0].type.name);

      poke.id = po.id;
      poke.name = po.name;
      poke.url = img;
      poke.color = type;
      poke.types = po.types;
      poke.all = po;
console.log(poke)
      await Promise.all(
        res.push(poke),
        res.sort((a, b) => a.id - b.id)
      );
    });
    console.log(res)
  return res;
};

getCategory(1);

export {
  getAllPokemon,
  getSpecificPokemon,
  getImagePokemon,
  getColorByType,
  getPokemons,
  getInfo,
  getCategory,
};
