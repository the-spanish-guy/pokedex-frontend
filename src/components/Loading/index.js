import React from "react";
import { LoadingContent } from "./styles"
import pokeball from "../../assets/pokebola_2.svg";

const CustomLoading = (props) => {

  return (
    <LoadingContent>
      <img src={pokeball}/>
    </LoadingContent>
  );
};

export default CustomLoading;