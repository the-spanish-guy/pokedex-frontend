import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: "row";
  /* background-color: red; */
  @media (max-width: 800px) {
    & .pokeContainer {
      border: 1px solid red;
    }
  }
`;

const Pokemon = styled.div`
  position: fixed;
  width: 50%;
  height: 100vh;
`;

const PokemonData = styled.div`
  right: 0px;
  /* margin-right: -290px; */
  /* left: 0px; */
  position: absolute;
  width: 50%;
  height: 100vh;
  padding: 20px;
`;

const TypeNamePokemon = styled.span`
  color: white;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 19px;
`;

const NamePokemon = styled.p`
  color: white;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 70px;
  opacity: 0.6;
`;

const DataContainer = styled.div`
  margin-top: 30;
  margin-bottom: 40;
`;

const PokeDataContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PokeDataTitles = styled.span`
  font-weight: medium;
  font-size: 20px;
`;

const PokeDataValues = styled.span`
  margin: 0px 40px 0px 40px;
  font-weight: 500;
  font-size: 16px;
`;

const TableStatsRow = styled.tr`
  /* margin-bottom: 200px !important; */
  padding: 20px;
`;

const PokeDataTableTitles = styled.span`
  font-weight: medium;
  font-size: 20px;
`;

const PokeDataTableValues = styled.span`
  margin: 0px 0px 0px 30px;
  font-weight: 500;
  font-size: 16px;
`;

export {
  Container,
  Pokemon,
  PokemonData,
  TypeNamePokemon,
  NamePokemon,
  PokeDataContainer,
  PokeDataTitles,
  PokeDataValues,
  DataContainer,
  TableStatsRow,
  PokeDataTableTitles,
  PokeDataTableValues,
};
