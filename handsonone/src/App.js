import FunctionalComponent from "./Components/FunctionalComponent";
import ClassComponent from "./Components/ClassComponent";
import { useState } from "react";
import "./style.css"

function App() {
  const[count,setCount]=useState(false);
  const[data,setData]=useState(false);
  const handleFunction=()=>{
    setCount(!count);
  }
  const handleClass=()=>{
    setData(!data);
  }
  return (
    <>
    <div className="main">
    <h1 className="heading">Styling using Functional and Class Component</h1>
    <button onClick={handleFunction} className="btn1">To see styling in functional component</button>
    <button onClick={handleClass} className="btn2">To see styling in class component</button>
    <div className="components">
    {count?<FunctionalComponent/>:null}
    {data?<ClassComponent/>:null}
    </div>
    </div>
    </>
  );
}

export default App;