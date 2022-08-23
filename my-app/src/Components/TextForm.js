import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to LowerCase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text has been cleared", "success");
  };
  const handleCapitalClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("First letter has been capitalized", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");

    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new text" Wrong way to change the state
  // setText("new text") Correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>
          Capitalise First Letter
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary </h2>
        <p>
          {text.split(" ").filter((n) => n !== "").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.08 * text.split(" ").filter((n) => n !== "").length} Minutes Read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
