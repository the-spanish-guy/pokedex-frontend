const getColor = (type) => {
  switch (type) {
    case "bug":
      return "#C5DC90";

    case "dark":
      return "#A7A6AB";

    case "dragon":
      return "#7FB0E2";

    case "electric":
      return "#F8EBA1";

    case "fairy":
      return "#F6C4F1";

    case "fighting":
      return "#E79BAA";

    case "fire":
      return "#FCD0A0";

    case "flying":
      return "#CDDBF5";

    case "ghost":
      return "#AAB2DB";

    case "grass":
      return "#ABDCA7";

    case "ground":
      return "#EBBAA1";

    case "ice":
      return "#B6E6DE";

    case "normal":
      return "#CDCECC";

    case "poison":
      return "#D9ACE5";

    case "psychic":
      return "#FCBEBD";

    case "rock":
      return "#E2DBC1";

    case "steel":
      return "#A6C7CE";

    case "water":
      return "#A4CBEE";

    default:
      return "#FF0000";
  }
};

const getTypeIconColor = (type) => {
  switch (type) {
    case "bug":
      return "#92BD2D";

    case "dark":
      return "#595761";

    case "dragon":
      return "#0C6AC8";

    case "electric":
      return "#F2D94E";

    case "fairy":
      return "#EF90E6";

    case "fighting":
      return "#D3425F";

    case "fire":
      return "#E2763E";

    case "flying":
      return "#A1BBEC";

    case "ghost":
      return "#5F6DBC";

    case "grass":
      return "#60BD58";

    case "ground":
      return "#DA7C4D";

    case "ice":
      return "#76D1C1";

    case "normal":
      return "#A0A29F";

    case "poison":
      return "#B763CF";

    case "psychic":
      return "#FA8582";

    case "rock":
      return "#C9BC8A";

    case "steel":
      return "#5795A3";

    case "water":
      return "#539DDF";

    default:
      return "";
  }
};

const getIconByType = (type) => {
  switch (type) {
    case "bug":
      return require("../assets/bug.svg");

    case "dark":
      return require("../assets/dark.svg");

    case "dragon":
      return require("../assets/dragon.svg");

    case "electric":
      return require("../assets/electric.svg");

    case "fairy":
      return require("../assets/fairy.svg");

    case "fighting":
      return require("../assets/fighting.svg");

    case "fire":
      return require("../assets/fire.svg");

    case "flying":
      return require("../assets/flying.svg");

    case "ghost":
      return require("../assets/ghost.svg");

    case "grass":
      return require("../assets/grass.svg");

    case "ground":
      return require("../assets/ground.svg");

    case "ice":
      return require("../assets/ice.svg");

    case "normal":
      return require("../assets/normal.svg");

    case "poison":
      return require("../assets/poison.svg");

    case "psychic":
      return require("../assets/psychic.svg");

    case "rock":
      return require("../assets/rock.svg");

    case "steel":
      return require("../assets/steel.svg");

    case "water":
      return require("../assets/water.svg");

    case "pokeball":
      return require("../assets/pokebola.svg");

    case "male":
      return require("../assets/male.svg");

    case "female":
      return require("../assets/female.svg");

    default:
      return "";
  }
};

const formatNumber = (number) => {
  const n = number.toString().length;
  switch (n) {
    case 1:
      return `#00${number}`;

    case 2:
      return `#0${number}`;

    default:
      return `#${number}`;
  }
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const getEffectiveByType = (type) => {
  switch (type) {
    case "bug":
      return {
        vulnerability: ["flying", "rock", "fire"],
        resistent: ["fighting", "ground", "grass"],
      };
    case "dark":
      return {
        vulnerability: ["fighting", "bug", "fairy"],
        resistent: ["ghost", "psychic", "dark"],
      };
    case "dragon":
      return {
        vulnerability: ["ice", "dragon", "fairy"],
        resistent: ["fire", "water", "grass", "electric"],
      };
    case "electric":
      return {
        vulnerability: ["ground"],
        resistent: ["flying", "steel", "electric"],
      };
    case "fairy":
      return {
        vulnerability: ["poison", "steel"],
        resistent: ["flying", "bug", "dragon", "dark"],
      };
    case "fighting":
      return {
        vulnerability: ["flying", "psychic", "fairy"],
        resistent: ["rock", "bug", "dark"],
      };
    case "fire":
      return {
        vulnerability: ["ground", "rock", "water"],
        resistent: ["bug", "steel", "fire", "grass", "ice"],
      };
    case "flying":
      return {
        vulnerability: ["rock", "electric", "ice"],
        resistent: ["fighting", "ground", "bug", "fairy"],
      };
    case "ghost":
      return {
        vulnerability: ["ghost", "dark"],
        resistent: ["normal", "fighting", "poison", "bug"],
      };
    case "grass":
      return {
        vulnerability: ["flying", "poison", "bug", "fire", "ice"],
        resistent: ["ground", "water", "grass", "electric"],
      };
    case "ground":
      return {
        vulnerability: ["water", "grass", "ice"],
        resistent: ["poison", "rock", "electric"],
      };
    case "ice":
      return {
        vulnerability: ["fighting", "rock", "steel", "fire"],
        resistent: ["ice"],
      };
    case "normal":
      return {
        vulnerability: ["fighting"],
        resistent: ["ghost"],
      };
    case "poison":
      return {
        vulnerability: ["ground", "psychic"],
        resistent: ["fighting", "poison", "grass", "fairy"],
      };
    case "psychic":
      return {
        vulnerability: ["grass", "ghost", "dark"],
        resistent: ["fighting", "psychic"],
      };
    case "rock":
      return {
        vulnerability: ["fighting", "ground", "steel", "water", "grass"],
        resistent: ["normal", "flying", "poison", "fire"],
      };
    case "steel":
      return {
        vulnerability: ["fighting", "ground", "fire"],
        resistent: [
          "normal",
          "flying",
          "poison",
          "rock",
          "bug",
          "steel",
          "grass",
          "psychic",
          "ice",
          "dragon",
          "fairy",
        ],
      };
    case "water":
      return {
        vulnerability: ["grass", "electric"],
        resistent: ["steel", "fire", "water", "ice"],
      };

    default:
  }
};

const getVulnarability = (type) => {
  let vulnerabilidade = [],
    resistencia = [];

  type.map(({ type: t }) => {
    const { vulnerability: v, resistent: r } = getEffectiveByType(t.name);
    vulnerabilidade.push(...v);
    resistencia.push(...r);
    return true;
  });

  const weak = [];
  vulnerabilidade.map((v) => {
    if (!resistencia.includes(v)) {
      weak.push(v);
    }
    return true;
  });
  const novaArr = weak.filter((este, i) => weak.indexOf(este) === i);
  return novaArr;
};

const hexToRgbA = (hex, opacity) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      "," +
      opacity +
      ")"
    );
  }
  throw new Error("Bad Hex");
};

export {
  getColor,
  formatNumber,
  getTypeIconColor,
  getIconByType,
  capitalize,
  getVulnarability,
  hexToRgbA,
};
