import React, { useEffect, useState } from "react";

import {
  Container,
  MenuSection,
  PokemonDisplay,
  Card,
  TypeNamePokemon,
  PokedexTitle,
  PokedexDetailsContent,
  PokedexSearch,
  Button
} from "./styles";

import { getDataOfPokemon, getPokemons, getSpecificPokemons } from "../../services/api.js";
import {
  getIconByType,
  getTypeIconColor,
  formatNumber,
  capitalize,
} from "../../utils/utils.js";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [getPokemon, setGetPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [hasRefresh, setHasRefresh] = useState(true);
  const history = useHistory();
// console.log(searse)
  async function loadPokemon() {
    const data = await getPokemons();
    console.log(data);
    setGetPokemon(data);
    // setHasRefresh(true)
  }

  async function getSinglePokemon(nameOrID) {
    const res = await getSpecificPokemons(nameOrID)
    setGetPokemon(res)
  }

  async function handlePage(e, pokemon) {
    e.preventDefault();
    const dataPokemon = await getDataOfPokemon(pokemon.id);
    const obj = {
      pokemon,
      dataPokemon: [dataPokemon],
    };

    history.push("/pokemon", obj);
  }

  useEffect(() => {
    loadPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <MenuSection>
        <PokedexTitle>Pokédex</PokedexTitle>
        <PokedexDetailsContent>
          <p>
            The Pokédex contains detailed stats for every creature from the
            Pokémon games.
          </p>
        </PokedexDetailsContent>

        <PokedexSearch style={{marginTop: 80, position: "relative"}}>
          <input type="text" className="search" value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <span className="label_txt">Search</span>
          <Button onClick={() => getSinglePokemon(search)}>Pesquisar</Button>
        </PokedexSearch>
      </MenuSection>

      <PokemonDisplay>
        {getPokemon.map((pokemon) => (
          <Card
            onClick={(e) => handlePage(e, pokemon)}
            style={{ backgroundColor: pokemon.color }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "4px 0px 0px 4px",
              }}
            >
              {pokemon.types.map(({ type }) => (
                <div
                  style={{
                    // border: "1px solid",
                    backgroundColor: getTypeIconColor(type.name),
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    width: "auto",
                    padding: "4px 6px 4px 6px",
                    margin: 4,
                  }}
                >
                  <img
                    src={getIconByType(type.name)}
                    alt={pokemon.name}
                    style={{ width: "20px", marginRight: 2 }}
                  />
                  <TypeNamePokemon>{type.name}</TypeNamePokemon>
                </div>
              ))}
            </div>

            <img className="pokemon" src={pokemon.url} alt={pokemon.name} />
            <p className="name">{formatNumber(pokemon.id)}</p>
            <p className="name">{capitalize(pokemon.name)}</p>
          </Card>
        ))}
      </PokemonDisplay>
    </Container>
  );
}
