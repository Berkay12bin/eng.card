import React, { useState } from "react";
import CardFlip from "./CardFlip";
import CardInput from "./CardInput";
import { Button } from "@material-ui/core";
export default function List() {
  const [words, setWords] = useState([
    { id: 1, eng: "bring", tr: "getirmek", example: "Bring it" },
    { id: 2, eng: "go", tr: "gitmek", example: "Go Home" },
    { id: 3, eng: "find", tr: "bulmak", example: "Find it" },
  ]);
  const[operation,setOperation]=useState(false);
  const wordCard=()=>{
      setOperation(true)
  }
  const wordAdd=()=>{
    setOperation(false)
  }
  const [queue,setQueue]=useState(1);
  const increase=()=>{
      setQueue(prevState=>prevState+1)
  }
  const decrease=()=>{
    setQueue(prevState=>prevState-1)
}
  return (
    <div>
      <div style={{marginButton:"15px",display:"flex",justifyContent:"space-around",marginBottom:"30px"}}>
        <Button onClick={wordCard} variant="contained" color="secondary">
          Kelime Kartları
        </Button>
        <Button onClick={wordAdd}  variant="contained" color="secondary">
          Kelime Ekle
        </Button>
      </div>
      {
          operation ? words.map(word=>{
              if(word.id=== queue){
                return<CardFlip key={word.id} word={word} decrease={decrease} increase={increase} 
                queue={queue} words={words}/>;
              }
          }) :<CardInput words={words} setWords={setWords}/>
      }
    </div>
  );
}
