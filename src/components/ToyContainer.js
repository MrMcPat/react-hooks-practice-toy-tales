import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDonate, onUpdateToy}) {
  const toyCards = toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} onDonate={onDonate} onUpdateToy={onUpdateToy}/>
  })

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
