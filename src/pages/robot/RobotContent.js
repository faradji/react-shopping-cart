import React from "react";
import UserInputForm from "./components/robotLogic";
function Main() {
  return (
    <div className="main">
      <div className="main-board">
        <p>
          To control the robot please send L (Left), R (Right), F (forward) in
          the text field.
          <br />
          The size of the room is 5x6.
        </p>
        <ul style={{ listStyleType: "none" }}>
          <li>L = moves the robot one step to the Left.</li>
          <li>R = moves the robot one step to the Right.</li>
          <li>F = moves the robot one step up(north)</li>
        </ul>
      </div>
      <div className="main-info">
        <div>
          <UserInputForm />
        </div>
      </div>
    </div>
  );
}

export default Main;
