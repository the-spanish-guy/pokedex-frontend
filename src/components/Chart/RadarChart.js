import React from "react";
import { Radar } from "react-chartjs-2";

export default function RadarChart(props) {
  const { data: dataPokemon, name, borderColor, bgColor } = props;
  console.log(props);
  console.log(dataPokemon.map((l) => l.stat.name));

  const nameCharAt = name.charAt(0).toUpperCase() + name.slice(1);

  const data = {
    labels: dataPokemon.map((l) => l.stat.name),
    datasets: [
      {
        label: name,
        data: dataPokemon.map((b) => b.base_stat),
        backgroundColor: bgColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: `${nameCharAt} Stats`,
    },
    aintainAspectRatio: false,
    legend: false,
    scale: {
      angleLines: {
        display: false,
      },
      ticks: {
        display: false,
        beginAtZero: true,
      },
    },
  };
  return (
    <>
      <Radar data={data} options={options} />
    </>
  );
}
