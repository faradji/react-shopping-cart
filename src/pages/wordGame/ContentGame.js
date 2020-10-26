import React from "react";
import useWordGame from "./hooks/useWordGame";
import "./styles.css";

function ContentGame() {
  const {
    timeRemaining,
    isTimeRunning,
    handleChange,
    startGame,
    textBoxRef,
    wordCount,
    text,
    wordPerMin,
  } = useWordGame(10);
  return (
    <div>
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
      {wordPerMin > 0 && <h1>Average words per minutes: {wordPerMin}</h1>}
    </div>
  );
}

export default ContentGame;
