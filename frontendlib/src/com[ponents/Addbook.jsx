import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Addbook = (props) => {
  var navigate = useNavigate();
  console.log("props data",props.data);
  console.log("props method",props.method);

  var [inp, setInp] = useState(props.data);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInp((inp) => ({ ...inp, [name]: value }));
    console.log(inp);
  };

  const readHandler = () => {
    console.log("clicked");
    if(props.method==="post"){
    axios
      .post("http://localhost:3008/addbooks", inp)
      .then((response) => {
        alert("data added");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  
  if(props.method==="put"){
    axios.put("http://localhost:3008/edit/"+inp._id,inp)
    .then((response)=>{
      alert("updated");
      window.location.reload(false)
    })
  }
  }
  return (
    <div style={{ paddingTop: "100px" }}>
      <TextField
        name="BookName"
        value={inp.BookName}
        onChange={inputHandler}
        label="Book Name"
      />
      <br />
      <br />
      <TextField
        name="author"
        value={inp.author}
        onChange={inputHandler}
        label="author"
      />
      <br />
      <br />
      <TextField
        name="language"
        value={inp.language}
        onChange={inputHandler}
        label="language"
      />
      <br />
      <br />
      <TextField
        name="genre"
        value={inp.genre}
        onChange={inputHandler}
        label="genre"
      />
      <br />
      <br />
      <TextField
        name="bookNum"
        value={inp.bookNum}
        onChange={inputHandler}
        label="Book No"
      />
      <br />
      <br />
      <Button variant="contained" onClick={readHandler}>
        Submit
      </Button>
    </div>
  );
};

export default Addbook;
