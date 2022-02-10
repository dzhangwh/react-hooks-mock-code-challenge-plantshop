import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(plantData => setPlants(plantData))

  }, [])

  function createPlant(newPlant) {
    setPlants((oldPlants) => [...oldPlants, newPlant])
  }

  const filteredPlants = plants.filter(plantTest => plantTest.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm createPlant={createPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plantData={filteredPlants} />
    </main>
  );
}

export default PlantPage;
