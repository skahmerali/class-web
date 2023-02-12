import About from "./components/About/About";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Nav";


function App() {
  return (
    <div className="App">
    <Home/>
 
    <Nav/>
    <About name='Kashan'/>
      </div>
  );
}

export default App;
