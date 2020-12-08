import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, bgSecondColor } = props;

  const containerStyles = {
    height: 18,
    width: '80%',
    backgroundColor: `${bgSecondColor ? bgSecondColor : "#e0e0de"}`,
    borderRadius: 50,
    // margin: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    transition: "width 8s ease-in-out"
    // textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default ProgressBar;