import React from "react";
import Confetti from "react-confetti";

const ConfettiRain = () => {
  return (
    <Confetti
      width={window.innerWidth || 300}
      height={window.innerHeight || 100}
    />
  );
};

export default ConfettiRain;
