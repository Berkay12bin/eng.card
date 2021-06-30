import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "@material-ui/core";
const CardFlip = ({word, queue, increase, decrease, words}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onClick={handleClick}
          style={{
            height: 300,
            width: 300,
            backgroundColor: "#F5B041",
            color: "#212F3D",
            display: "flex", flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            bordeRadius: "30px",
          }}
        >
          <h1>{word.eng}</h1>
          <h3>"{word.example}"</h3>

        </div>

        <div
          onClick={handleClick}
          style={{
            height: 300,
            width: 300,
            backgroundColor: "#212F3D",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bordeRadius: "30px",
          }}
        >
          <h1>{word.tr}</h1>
        </div>
      </ReactCardFlip>
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
      <Button disabled={queue === 1 } onClick={decrease} variant="contained" color="primary">
          Önceki
        </Button>
        <Button disabled={queue===words.length} onClick={increase} variant="contained" color="primary">
          Sonraki
        </Button>
        
      </div>
    </div>
  );
};

export default CardFlip;
