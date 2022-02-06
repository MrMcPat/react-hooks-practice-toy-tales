import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => setToys(data))
  }, [])

  function addNewToy (newToy) {
    setToys([...toys, newToy])
  }

  function handleDonate(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => {
      const updatedToys = toys.filter(toy => {
        return toy.id !== id
      })
      setToys(updatedToys)
    })
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map(toy => {
      return toy.id === updatedToy.id ? updatedToy : toy
    })
    setToys(updatedToys)
    console.log(toys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDonate={handleDonate} onUpdateToy={handleUpdateToy}/>
    </>
  );
}

export default App;
