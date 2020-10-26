/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";

function UserInputForm() {
  const [value, useValue] = useState("");
  const [position, usePosition] = useState(0);
  const [currentPos, useCurrentPos] = useState([0, 0]);
  const xyPos = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
    [5, 0],
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
  ];

  const handleChange = (e) => {
    // set state of value to the input provided by the user
    useValue(e.target.value);
  };
  useEffect(() => {
    useCurrentPos(xyPos[position]);
  }, [position]);

  const handleSubmit = (e) => {
    //check if user input matches L R F
    if (!value.match(/^[LlRrFf]+$/)) {
      alert("You can only use L/l, R/r, F/f to move the robot");
      e.preventDefault();
      return;
    }

    //split the input to individual chars and move the robot according to input
    const pieces = value.split("");
    for (let i = 0; i < pieces.length; i++) {
      switch (pieces[i].toLowerCase()) {
        case "l":
          if (position === 0) {
            usePosition(4);
          } else if (position === 5) {
            usePosition(9);
          } else if (position === 10) {
            usePosition(14);
          } else if (position === 15) {
            usePosition(19);
          } else if (position === 20) {
            usePosition(24);
          } else {
            usePosition((prev) => prev - 1);
          }
          break;
        case "r":
          if (position === 4) {
            usePosition(0);
          } else if (position === 9) {
            usePosition(5);
          } else if (position === 14) {
            usePosition(10);
          } else if (position === 19) {
            usePosition(15);
          } else if (position === 24) {
            usePosition(20);
          } else {
            usePosition((prev) => prev + 1);
          }
          break;
        case "f":
          if (position === 0) {
            usePosition(20);
          } else if (position === 1) {
            usePosition(21);
          } else if (position === 2) {
            usePosition(22);
          } else if (position === 3) {
            usePosition(23);
          } else if (position === 4) {
            usePosition(24);
          } else {
            usePosition((prev) => prev - 5);
          }
          break;
        default:
      }
    }
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your current position is {currentPos ? currentPos : "0,0"} <br />
      </label>
      <label>
        Directions:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UserInputForm;
