import React, { useCallback, useEffect, useState } from "react";
function ChangingText():JSX.Element {
  console.log("called");
  const [text, setText] = useState("Adventure");

  const shuffle = useCallback(() => {
    setText(texts[Math.floor(Math.random() * texts.length)]);
  }, []);

  useEffect(() => {
    const timeout = setInterval(() => {
      shuffle();
      console.log("refresh");
      return <span id="change">{text}</span>;
    }, 5000);
    return () => clearInterval(timeout);
  }, [shuffle]);

  const texts = [
    "Adventure",
    "Multiplayer",
    "Horror",
    "RPG",
    "Puzzle",
    "Parkour",
  ];

  return <span id="change">{text}</span>;
}

export default ChangingText;
