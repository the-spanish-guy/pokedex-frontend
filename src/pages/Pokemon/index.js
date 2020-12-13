import React, { useEffect, useState } from "react";
import {
  formatNumber,
  getIconByType,
  getTypeIconColor,
  capitalize,
} from "../../utils/utils";

import {
  Grid,
  Paper,
  Typography,
  LinearProgress,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  TypeNamePokemon,
  NamePokemon,
  PokeDataTitles,
  PokeDataValues,
  PokeDataContainer,
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
            width="20"
            height="20"
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
            width="20"
            height="20"
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

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    cardPokemon: {
      position: "fixed",
      padding: theme.spacing(2),
      textAlign: "center",
      backgroundColor: pokemon.color,
      height: "100vh",
      width: "50vw"
    },
    cardDataPokemon: {
      padding: theme.spacing(2),
      textAlign: "center",
      height: "100%",
    },
    colorPrimary: {
      backgroundColor: pokemon.color,
    },
    barColorPrimary: {
      backgroundColor: `${colorFirstType} !important`,
    },
  }));

  const classes = useStyles();

  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={12} sm={6}>
        <Box component="div" className={classes.cardPokemon}>
          <div
            style={{
              position: "absolute",
              top: 40,
              left: 40,
              display: "flex",
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
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={0} className={classes.cardDataPokemon}>
          {dataPokemon.map((data) => (
            <Grid container>
              <Grid cotnainer item xs={12}>
                <Typography
                  variant="h4"
                  style={{ color: colorFirstType }}
                  align="center"
                >
                  Pokédex data
                </Typography>
              </Grid>
              <Grid container item xs={12} sm={6}>
                <PokeDataContainer>
                  <PokeDataTitles>Height</PokeDataTitles>
                  <PokeDataValues style={{ color: colorFirstType }}>
                    {data.poke_data.height}
                  </PokeDataValues>
                </PokeDataContainer>
              </Grid>
              <Grid container item xs={12} sm={6}>
                <PokeDataContainer>
                  <PokeDataTitles>Weight</PokeDataTitles>
                  <PokeDataValues style={{ color: colorFirstType }}>
                    {data.poke_data.weight}
                  </PokeDataValues>
                </PokeDataContainer>
              </Grid>
              <Grid container item xs={12} sm={6}>
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
                </PokeDataContainer>
              </Grid>
              <Grid container item xs={12} sm={6}>
                <PokeDataTitles>Category</PokeDataTitles>
                <PokeDataValues style={{ color: colorFirstType }}>
                  {data.poke_data.category}
                </PokeDataValues>
              </Grid>

              <Grid container item xs={12} direction="row">
                <Typography
                  style={{
                    fontWeight: "medium",
                    fontSize: "20px",
                  }}
                >
                  Abilities
                </Typography>
                <Typography
                  align="left"
                  style={{
                    color: colorFirstType,
                    fontSize: "16px",
                    marginLeft: 10,
                  }}
                >
                  {data.poke_data.abilities.map((a, index) => (
                    <div>
                      {index + 1}.{a.ability.name}{" "}
                      {a.is_hidden ? "(hidden ability)" : ""}
                    </div>
                  ))}
                </Typography>
              </Grid>
              <Grid container item xs={12} direction="row">
                <Typography
                  style={{
                    fontWeight: "medium",
                    fontSize: "20px",
                  }}
                >
                  Weaknes
                </Typography>
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
              </Grid>

              <Grid cotnainer item xs={12}>
                <Typography
                  variant="h4"
                  style={{ color: colorFirstType }}
                  align="center"
                >
                  Training
                </Typography>
              </Grid>
              <Grid container item xs={12}>
                <PokeDataContainer>
                  <PokeDataTitles>Ev yiled</PokeDataTitles>
                  <PokeDataValues style={{ color: colorFirstType }}>
                    {data.training.ev_yield.map((e) => (
                      <Typography variant="span">
                        {e.effort} {e.stat.name}
                      </Typography>
                    ))}
                  </PokeDataValues>
                </PokeDataContainer>
              </Grid>
              <Grid container item xs={12}>
                <PokeDataContainer>
                  <PokeDataTitles>Catch rate</PokeDataTitles>
                  <PokeDataValues style={{ color: colorFirstType }}>
                    {data.training.catch_rate}
                  </PokeDataValues>
                </PokeDataContainer>
              </Grid>
              <Grid container item xs={12}>
                <PokeDataContainer>
                  <PokeDataTitles>Base Friendship</PokeDataTitles>
                  <PokeDataValues style={{ color: colorFirstType }}>
                    {data.training.base_friendship} (normal)
                  </PokeDataValues>
                </PokeDataContainer>
              </Grid>
              <Grid container item xs={12}>
                <PokeDataContainer>
                  <PokeDataTitles>Base Exp.</PokeDataTitles>
                  <PokeDataValues style={{ color: colorFirstType }}>
                    {data.training.base_exp}
                  </PokeDataValues>
                </PokeDataContainer>
              </Grid>
              <Grid container item xs={12}>
                <PokeDataContainer>
                  <PokeDataTitles>Catch raGrowth Ratete</PokeDataTitles>
                  <PokeDataValues style={{ color: colorFirstType }}>
                    {data.training.growth_rate}
                  </PokeDataValues>
                </PokeDataContainer>
              </Grid>

              <Grid cotnainer item xs={12}>
                <Typography
                  variant="h4"
                  style={{ color: colorFirstType }}
                  align="center"
                >
                  Breeding
                </Typography>
              </Grid>
              <Grid container item xs={12}>
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
              </Grid>

              <Grid cotnainer item xs={12}>
                <Typography
                  variant="h4"
                  style={{ color: colorFirstType }}
                  align="center"
                >
                  Base Stats
                </Typography>
              </Grid>

              {data.base_stats.map((b, index) => (
                <>
                  <Grid cotnainer item xs={12} sm={3}>
                    <Typography>{b.stat.name}</Typography>
                  </Grid>
                  <Grid cotnainer item xs={12} sm={2}>
                    <Typography style={{ color: colorFirstType }}>
                      {b.base_stat}
                    </Typography>
                  </Grid>
                  <Grid cotnainer item xs={12} sm={6}>
                    <LinearProgress
                        variant="determinate"
                      classes={{
                        colorPrimary: classes.colorPrimary,
                        barColorPrimary: classes.barColorPrimary,
                      }}
                      value={b.base_stat}
                    />
                  </Grid>
                </>
              ))}

              <Grid cotnainer item xs={12}>
                <Typography
                  variant="h4"
                  style={{ color: colorFirstType }}
                  align="center"
                >
                  Type
                </Typography>

                <Typography>
                  The effectiveness of each type on {capitalize(pokemon.name)}.
                </Typography>
              </Grid>
              <Grid item xs={12} container>
                <Box
                  component="span"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                  m={1}
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
                          width: 40,
                          height: 40,
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
                </Box>
              </Grid>

              <Grid cotnainer item xs={12}>
                <Typography
                  variant="h4"
                  style={{ color: colorFirstType }}
                  align="center"
                >
                  Evoluiton
                </Typography>
              </Grid>

              <Grid container direction="row" spacing={4} justify="center">
                {data.evolves.map((t, index) =>
                  t.name ? (
                    <Grid item xs={12} sm={3}>
                    <img src={t.url} style={{ width: "100%"}} />
                    </Grid>
                  ) : (
                    <span>{t}</span>
                  )
                )}
              </Grid>
            </Grid>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}
