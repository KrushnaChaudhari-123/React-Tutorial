import React, { useState } from "react";

export default function TextForm(props) {
  // using useState hooks to manage state of textarea
  const [text, setText] = useState();

  const setUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const onchangehandler = (event) => {
    setText(event.target.value);
  };
  const countword = () => {
    
    if (typeof text == "number" || typeof text == 'undefined') {
      setText("Enter a valid text");
    } else {
      let count = 0;
      for (var i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          count += 1;
        }
      }
      setText(count + 1);
    }
  };
  return (
    <>
      <div className="form-group">
        {/* container is a class used to style contianer in center */}
        <div className="container my-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="9"
            value={text}
            //   onChange event is used to allow typing in text area it set the new value to the text variable in hooks
            onChange={onchangehandler}
          ></textarea>
          <button className="btn btn-primary my-3 mx-3" onClick={setUpperCase}>
            UpperCase
          </button>
          <button
            className="btn btn-danger my-3 mx-3"
            onClick={() => {
              setText(text.toLowerCase());
            }}
          >
            LowerCase
          </button>
          <button
            className="btn btn-warning my-3 mx-3"
            onClick={() => {
              setText(text.length);
            }}
          >
            Count Character
          </button>
          <button className="btn btn-success my-3 mx-3" onClick={countword}>
            Count Words
          </button>
          <button
            className="btn btn-secondary my-3 mx-3"
            onClick={() => {
              setText("");
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
