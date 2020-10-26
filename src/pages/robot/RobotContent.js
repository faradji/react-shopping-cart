import React from "react";
import UserInputForm from "./components/robotLogic";
function Main() {
  return (
    <div className="main">
      <div className="main-board">
        To controll the robot please send L (Left), R (Right), F (forward) in
        the text field.
        <br />
        The size of the room is 5x6.
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
