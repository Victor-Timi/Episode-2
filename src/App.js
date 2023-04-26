import Axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  const [display, setDisplay] = useState("")

  const handleChange = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${value}/`).then((res) => {
      setDisplay(res.data[0].excuse)
    })
  }


  return (
    <div className="App">
      <h1>GENERATE AN EXCUSE</h1>
      <button onClick={() => handleChange(setValue("party"))}>Party</button>
      <button onClick={() => handleChange(setValue("family"))}>Family</button>
      <button onClick={() => handleChange(setValue("office"))}>Office</button>
      <h4>{display}</h4>
    </div>
  );
}

export default App;
