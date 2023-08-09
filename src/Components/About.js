import React, { useState } from "react";

export default function About() {
  const [text, setText] = useState("Dark Theme");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const containerStyles = {
    backgroundColor: isDarkTheme ? "black" : "white",
  };

  const cardStyles = {
    width: "18rem",
    color: isDarkTheme ? "white" : "black",
    backgroundColor: isDarkTheme ? "black" : "white",
    border: isDarkTheme ? "1px solid white" : "1px solid black",
  };

  const listStyles = {
    color: isDarkTheme ? "white" : "black",
    backgroundColor: isDarkTheme ? "black" : "white",
  };

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    setText(isDarkTheme ? "Light Theme" : "Dark Theme");
  };

  return (
    <>
      <div className="container" style={containerStyles}>
        <div className="card" style={cardStyles}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item" style={listStyles}>
              Cras justo odio
            </li>
            <li className="list-group-item" style={listStyles}>
              Dapibus ac facilisis in
            </li>
            <li className="list-group-item" style={listStyles}>
              Vestibulum at eros
            </li>
          </ul>
        </div>
      </div>
      <button onClick={changeTheme} className="btn btn-dark mx-5 my-4" style={cardStyles}>
        {text}
      </button>
    </>
  );
}
