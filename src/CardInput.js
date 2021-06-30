import React,{useState} from "react";
import { TextField, Button } from "@material-ui/core";

export default function CardInput({words,setWords}) {
    const[input,setInput]=useState({id:null,eng:"",tr:"",example:"",})
    const changeEng =(e)=>{
        setInput({...input,eng:e.target.value})
    }
    const changeTr =(e)=>{
        setInput({...input,tr:e.target.value})
    }
    const changeEx =(e)=>{
        setInput({...input, id:words.length + 1, example:e.target.value})
        
    }
    const addHandler=(e)=>{
      setWords([...words, input])
      setInput({id:null,eng:"",tr:"",example:"",})

    }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField value={input.eng} onChange={changeEng}
        style={{ width: "500px", marginTop: "20px" }}
        id="outlined-basic"
        label="English"
        variant="outlined"
      />

      <TextField  value={input.tr} onChange={changeTr}
        style={{ width: "500px", marginTop: "20px" }}
        id="outlined-basic"
        label="Turkish"
        variant="outlined"
      />

      <TextField  value={input.example} onChange={changeEx}
        style={{ width: "500px", marginTop: "20px" }}
        id="outlined-basic"
        label="Example"
        variant="outlined"
      />
      <Button onClick={(e)=>addHandler(e)} style={{marginTop:"15px"}} variant="contained" color="primary">
        Ekle
      </Button>
    </div>
  );
}
