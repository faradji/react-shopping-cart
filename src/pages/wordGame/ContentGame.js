import React from "react";
import useWordGame from "./hooks/useWordGame";
import Header from "./components/Header";
import "./styles.css";

function contentGame() {
  const {
    timeRemaining,
    isTimeRunning,
    handleChange,
    startGame,
    textBoxRef,
    wordCount,
    text,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useWordGame(5);

  return (
    <div>
      <Header />
      <br />
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        {wordCount > 0 ? "Play again" : "Start"}
      </button>

      {wordCount > 0 && <h1>Word count: {wordCount}</h1>}
    </div>
  );
}

export default contentGame;
