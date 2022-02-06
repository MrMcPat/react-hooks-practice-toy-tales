import React from "react";

function ToyCard({toy, onDonate, onUpdateToy}) {

  function handleClick () {
    onDonate(toy.id)
  }

  function handleLikeClick() {

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes + 1,
      }),
    })
    .then(resp => resp.json())
    .then(onUpdateToy)
  }
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
