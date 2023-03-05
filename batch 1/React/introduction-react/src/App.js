import { useState } from "react";
import About from "./components/About/About";
import Name from "./components/class 2/Name";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Nav";
import './app.css' ;

function App() {
  var [isLit, setLit] = useState(false);
  // var fName = prompt("kindly add ur name ");

  return (
    <div className={isLit ? "lit" : "dark"}>
      {/* <Home/> */}
      the room is 
      {/* <Nav/> */}
      <button onClick={()=>{setLit(!isLit)}}>click me!</button>

      {/* <Name name={fName} /> */}
      {/* <About name='Kashan'/> */}
    </div>
  );
}

export default App;
