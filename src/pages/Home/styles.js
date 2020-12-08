import styled from "styled-components";
import logo from '../../assets/pokeball.png'

const Container = styled.div`
  display: flex;
  flex-direction: "row";
  /* background-color: red; */
`;

const MenuSection = styled.div`
  position: fixed;
  width: 40%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

const PokedexTitle = styled.h1`
  margin-top: 40;
  font-family: "Roboto";
  font-size: 80px;
  color: #707070;
`;
const PokedexSearch = styled.div`
  display: flex;
  flex-direction: row;
  & .search {
    display: block;
    width: 100%;
    height: 36px;
    border-width: 0 0 2px 0;
    border-color: #707070;
    font-family: Lusitana, serif;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: #f47b6f;
  }
  & .search:focus {
    outline: none;
    border-color: #f47b6f;
  }
  & .search:focus + .label_txt {
    -webkit-transform: translate(-8px, -8px) scale(.6);
    transform: translate(-8px, -8px) scale(.6);
    color: #f47b6f !important;
  }
  & .label_txt {
    color: #707070 !important;
    position: absolute;
    top: 0;
    transition: all .6s
  }
`;

const Button =  styled.a`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
color: #f47b6f;
cursor: pointer;

/* Color the border and text with theme.main */
color: ${props => props.theme.main};
border: 2px solid #f47b6f;
`

const PokedexDetailsContent = styled.div`
  width: 80%;
  p {
    text-align: center;
    font-size: 18px;
    color: #828282;
    word-wrap: break-word;
  }
`;

const PokemonDisplay = styled.div`
  right: 0px;
  width: 60%;
  height: 100vh;
  display: grid;
  cursor: pointer;
  position: absolute;
  background-color: #eeeeee;
  grid-template-columns: repeat(3, 1fr);
`;

const Card = styled.div`
  width: 220px;
  height: 220px;
  margin: 10px;

  border-radius: 24px;
  .pokemon {
    width: 60%;
    height: 60%;
    margin-left: calc(220px / 4);
    /* right: 2px */
  }
  .name {
    color: white;
    font-weight: bold;
    font-size: 18px;
    opacity: 0.6;
    margin-left: 10px;
    margin-top: -6px;
  }
`;

const TypeNamePokemon = styled.span`
  color: white;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 12px;
`;

export {
  Container,
  MenuSection,
  PokemonDisplay,
  Card,
  TypeNamePokemon,
  PokedexTitle,
  PokedexDetailsContent,
  PokedexSearch,
  Button
};
