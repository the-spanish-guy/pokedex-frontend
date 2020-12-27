import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

import {
  Container,
  Card,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import PokeballIcon from "../../components/DrawerIcon";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  getDataOfPokemon,
  getPokemons,
  getSpecificPokemons,
} from "../../services/api";
import { useEffect } from "react";
import { TypeNamePokemon } from "./styles";
import {
  capitalize,
  formatNumber,
  getIconByType,
  getTypeIconColor,
} from "../../utils/utils";
import logo from "../../assets/pokedex.svg";
import CustomLoading from "../../components/Loading";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    visibility: "hidden",
    [theme.breakpoints.down("sm")]: {
      visibility: "visible !important",
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  pokemon: {
    width: "60%",
    height: "60%",
    marginLeft: "calc(220px / 4)",
    /* right: 2px */
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    opacity: 0.6,
    marginLeft: "10px",
    marginTop: "-6px",
  },
  card: {
    outline: "none",
    border: "none",
    boxShadow: "none",
    cursor: "pointer",
  },
  imgPokemon: { width: "20px", marginRight: 2 },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [getPokemon, setGetPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  async function loadPokemon() {
    const data = await getPokemons();
    setGetPokemon(data);
    setLoading(false);
  }

  async function getSinglePokemon() {
    // e.preventDefault();
    setLoading(true);
    const res = await getSpecificPokemons(search);
    setGetPokemon(res);
    setLoading(false);
  }

  async function handlePage(e, pokemon) {
    e.preventDefault();
    // setLoading(true);
    // setHasRefresh(true);
    const dataPokemon = await getDataOfPokemon(pokemon.id);
    const obj = {
      pokemon,
      dataPokemon: [dataPokemon],
    };
    
    history.push(`/pokemon/${pokemon.name}`, obj);
    // setLoading(true);
  }

  useEffect(() => {
    loadPokemon();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div
        style={{
          position: "relative",
          // border: "1px solid red",
          height: "auto",
          // width: "98%",
          // margin: "0 auto",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} style={{ width: "250px" }} alt="logo" />
      </div>
      <Divider />
      <List>
        <ListItem>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getSinglePokemon();
            }}
          >
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Nome ou n pokedex
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </FormControl>
          </form>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Type" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div style={{ position: "fixed" }} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <PokeballIcon fontSize="large" />
            {/* <MenuIcon /> */}
          </IconButton>
        </Toolbar>
      </div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {loading ? (
        <CustomLoading />
      ) : (
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {getPokemon.map((pokemon) => (
              <Grid item xs={12} sm={4} lg={3} key={pokemon.id}>
                <Paper className={classes.paper} elevation={2}>
                  <Card
                    onClick={(e) => handlePage(e, pokemon)}
                    style={{
                      backgroundColor: pokemon.color,
                      boxShadow: `0px 0px 6px 0px ${pokemon.color}`,
                    }}
                    className={classes.card}
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
                          key={type.name}
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
                            className={classes.imgPokemon}
                          />
                          <TypeNamePokemon>{type.name}</TypeNamePokemon>
                        </div>
                      ))}
                    </div>

                    <img
                      className={classes.pokemon}
                      src={pokemon.url}
                      alt={pokemon.name}
                    />
                    <p className={classes.name}>{formatNumber(pokemon.id)}</p>
                    <Typography variant="h4" className={classes.name}>
                      {capitalize(pokemon.name)}
                    </Typography>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
