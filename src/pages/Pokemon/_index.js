import React, { useEffect, useState } from "react";
import { getDataOfPokemon } from "../../services/api.js";
import ProgressBar from "../../components/ProgressBar";
import {
  formatNumber,
  getIconByType,
  getTypeIconColor,
  capitalize,
} from "../../utils/utils";

import {
  Container,
  Pokemon as Poke,
  PokemonData,
  TypeNamePokemon,
  NamePokemon,
  PokeDataTitles,
  PokeDataValues,
  PokeDataContainer,
  DataContainer,
  TableStatsRow,
  PokeDataTableTitles,
  PokeDataTableValues,
} from "./styles";

export default function Pokemon({ location }) {
  const datas = location.state;
  const { pokemon, dataPokemon } = datas;
  const colorFirstType = getTypeIconColor(pokemon.types[0].type.name);
  const getgenderSvg = (type) => {
    switch (type) {
      case "female":
        const GenderFemale = (prop) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 36.86 58.975"
          >
            <path
              id="female"
              data-name="Icon ionic-md-female"
              d="M44.735,21.206A18.7,18.7,0,0,0,26.3,2.25,18.7,18.7,0,0,0,7.875,21.206,18.805,18.805,0,0,0,23.233,39.9v6.582H14.018V52.8h9.215v8.425h6.143V52.8h9.215V46.481H29.376V39.9A18.805,18.805,0,0,0,44.735,21.206Zm-30.716,0A12.486,12.486,0,0,1,26.3,8.569,12.486,12.486,0,0,1,38.591,21.206,12.486,12.486,0,0,1,26.3,33.844,12.486,12.486,0,0,1,14.018,21.206Z"
              transform="translate(-7.875 -2.25)"
              fill={prop.fill}
            />
          </svg>
        );
        return <GenderFemale fill={colorFirstType} />;

      case "male":
        const GenderMale = (prop) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 59.242 59.242"
          >
            <path
              id="male"
              data-name="Icon ionic-md-male"
              d="M55.781,3.375H37.553v6.836h13.4L35.759,25.391A20.5,20.5,0,1,0,40.6,30.233L55.781,15.038v13.4h6.836V3.375Zm-31.9,52.406A13.671,13.671,0,1,1,37.553,42.11,13.693,13.693,0,0,1,23.882,55.781Z"
              transform="translate(-3.375 -3.375)"
              fill={prop.fill}
            />
          </svg>
        );
        return <GenderMale fill={colorFirstType} />;

      default:
        return "#FF0000";
    }
  };

  return (
    <Container>
      <Poke
        className="pokeContainer"
        style={{
          backgroundColor: pokemon.color,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            display: "flex",
            // border: "1px solid red",
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
                padding: "6px 12px 6px 12px",
                margin: 4,
              }}
            >
              <img
                src={getIconByType(type.name)}
                alt={pokemon.name}
                style={{ width: "30px", marginRight: 10 }}
              />
              <TypeNamePokemon>{type.name}</TypeNamePokemon>
            </div>
          ))}
        </div>
        <img src={pokemon.url} alt={pokemon.name} style={{ width: "80%" }} />
        <h1 style={{ color: "white" }}>{formatNumber(pokemon.id)}</h1>
        <NamePokemon>{pokemon.name}</NamePokemon>
      </Poke>
      <PokemonData>
        {dataPokemon.map((data) => (
          <DataContainer>
            <div>
              <h1
                style={{
                  color: colorFirstType,
                }}
              >
                Pokedex data
              </h1>
              <div>
                <PokeDataContainer>
                  <PokeDataTitles>Height</PokeDataTitles>
                  <PokeDataValues style={{ color: colorFirstType }}>
                    {data.poke_data.height}
                  </PokeDataValues>
                  <PokeDataTitles>Weight</PokeDataTitles>
                  <PokeDataValues style={{ color: colorFirstType }}>
                    {data.poke_data.weight}
                  </PokeDataValues>
                </PokeDataContainer>
                <PokeDataContainer>
                  <PokeDataTitles>Gender</PokeDataTitles>
                  <PokeDataValues>
                    {data.poke_data.gender.map((t) =>
                      t === "unknow" ? (
                        <span style={{ color: colorFirstType }}>{t}</span>
                      ) : (
                        getgenderSvg(t)
                      )
                    )}
                  </PokeDataValues>
                  <PokeDataTitles>Category</PokeDataTitles>
                  <PokeDataValues style={{ color: colorFirstType }}>
                    {data.poke_data.category}
                  </PokeDataValues>
                </PokeDataContainer>
                <PokeDataContainer
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <PokeDataTitles>Abilities</PokeDataTitles>
                  <PokeDataValues style={{ color: colorFirstType }}>
                    {data.poke_data.abilities.map((a, index) => (
                      <div>
                        {index + 1}.{a.ability.name}{" "}
                        {a.is_hidden ? "(hidden ability)" : ""}
                      </div>
                    ))}
                  </PokeDataValues>
                </PokeDataContainer>
                <PokeDataContainer
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <PokeDataTitles>Weaknes</PokeDataTitles>
                  <PokeDataValues
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    {data.poke_data.weakness.map((w) => (
                      <div
                        style={{
                          backgroundColor: getTypeIconColor(w),
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: 4,
                          width: 29,
                          height: 29,
                        }}
                      >
                        <img
                          src={getIconByType(w)}
                          style={{ width: "70%" }}
                          alt={w}
                        />
                      </div>
                    ))}
                  </PokeDataValues>
                </PokeDataContainer>
              </div>
            </div>
            <h1
              style={{
                color: colorFirstType,
              }}
            >
              Training
            </h1>
            <PokeDataContainer>
              <PokeDataTitles>Ev yiled</PokeDataTitles>
              <PokeDataValues style={{ color: colorFirstType }}>
                {data.training.ev_yield.map((e) => (
                  <span>
                    {e.effort} {e.stat.name}
                  </span>
                ))}
              </PokeDataValues>
            </PokeDataContainer>
            <PokeDataContainer>
              <PokeDataTitles>Catch rate</PokeDataTitles>
              <PokeDataValues style={{ color: colorFirstType }}>
                {data.training.catch_rate}
              </PokeDataValues>
            </PokeDataContainer>
            <PokeDataContainer>
              <PokeDataTitles>Base Friendship</PokeDataTitles>
              <PokeDataValues style={{ color: colorFirstType }}>
                {data.training.base_friendship} (normal)
              </PokeDataValues>
            </PokeDataContainer>
            <PokeDataContainer>
              <PokeDataTitles>Base Exp.</PokeDataTitles>
              <PokeDataValues style={{ color: colorFirstType }}>
                {data.training.base_exp}
              </PokeDataValues>
            </PokeDataContainer>
            <PokeDataContainer>
              <PokeDataTitles>Growth Rate</PokeDataTitles>
              <PokeDataValues style={{ color: colorFirstType }}>
                {data.training.growth_rate}
              </PokeDataValues>
            </PokeDataContainer>
            <h1
              style={{
                color: colorFirstType,
              }}
            >
              Breeding
            </h1>
            <PokeDataContainer>
              <PokeDataTitles>Egg groups</PokeDataTitles>
              <PokeDataValues style={{ color: colorFirstType }}>
                {data.breeding.egg_groups.map((e, index) => (
                  <span style={{ marginRight: 4 }}>
                    {e.name}
                    {index + 1 < data.breeding.egg_groups.length ? "," : ""}
                  </span>
                ))}
              </PokeDataValues>
            </PokeDataContainer>
            <h1
              style={{
                color: colorFirstType,
              }}
            >
              Base Stats
            </h1>
            <PokeDataContainer>
              <table
                style={{ borderCollapse: "collapse", borderSpacing: "0px" }}
              >
                {data.base_stats.map((b, index) => (
                  // <div style={{display: "flex", flexDirection: "row"}}>
                  <TableStatsRow>
                    <td style={{ width: "8%", padding: 8 }}>
                      <PokeDataTableTitles
                        style={{ textTransform: "uppercase", margin: "0px" }}
                      >
                        {b.stat.name}
                      </PokeDataTableTitles>
                    </td>
                    <td style={{ width: "2%", padding: 8 }}>
                      <PokeDataTableValues style={{ color: colorFirstType }}>
                        {b.base_stat}
                      </PokeDataTableValues>
                    </td>
                    <td style={{ padding: 8 }}>
                      <ProgressBar
                        completed={b.base_stat}
                        bgcolor={colorFirstType}
                        bgSecondColor={pokemon.color}
                      />
                    </td>
                  </TableStatsRow>
                  // </div>
                ))}
              </table>
            </PokeDataContainer>
            <h1
              style={{
                color: colorFirstType,
              }}
            >
              Type
            </h1>
            <p>The effectiveness of each type on {capitalize(pokemon.name)}.</p>
            <PokeDataContainer>
              <PokeDataValues
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {data.type.map((w) => (
                  <div style={{ textAlign: "center", marginBottom: 12 }}>
                    <div
                      style={{
                        backgroundColor: getTypeIconColor(w.name_type),
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 4,
                        width: 60,
                        height: 60,
                      }}
                    >
                      <img
                        src={getIconByType(w.name_type)}
                        style={{ width: "70%" }}
                        alt={w.name_type}
                      />
                    </div>
                    <span>{w.effective}</span>
                  </div>
                ))}
              </PokeDataValues>
            </PokeDataContainer>
            <h1
              style={{
                color: colorFirstType,
              }}
            >
              Evoluiton
            </h1>
            <PokeDataContainer>
              {/* <PokeDataTitles>Evoluções</PokeDataTitles> */}
              <PokeDataValues
                style={{
                  color: colorFirstType,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {data.evolves.map((t, index) => (
                  <div>
                    { t.name ? 
                      <img src={t.url} style={{ width: "50%" }} />
                    :
                      <span>{t}</span>
                    }
                  </div>
                ))}
              </PokeDataValues>
            </PokeDataContainer>
          </DataContainer>
        ))}
      </PokemonData>
    </Container>
  );
}
