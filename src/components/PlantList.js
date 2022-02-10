import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData }) {
  return (
    <ul className="cards">{plantData.map((plantObj) => <PlantCard key={plantObj.id} {...plantObj} />)}</ul>
  );
}

export default PlantList;
