import React, { useState } from "react";

function NewPlantForm({ createPlant }) {

  //const [name, setName] = useState("")
  //const [image, setImage] = useState("")
  //const [price, setPrice] = useState(0)

  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(e) {
    setNewPlant((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  function submitHandler(e) {
    e.preventDefault()

    //create a new plant object from the values in state 

    const reqConfig = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newPlant)
    }

    fetch('http://localhost:6001/plants', reqConfig)
      .then(r => r.json())
      .then(newData => {
        createPlant(newData)
        setNewPlant({
          name: "",
          image: "",
          price: ""
        })
      })
    //const newPlant = {
    //name: name,
    // image: image,
    // price: price
    // }
    //createPlant(newPlant)

    //setName("")
    //setImage("")
    //setPrice("")

  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => submitHandler(e)}>
        <input onChange={handleChange} value={newPlant.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={newPlant.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={newPlant.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
