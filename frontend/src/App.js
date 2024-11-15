// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  return (
  
  <div>
    


    <Navbar/>

    <Routes>
     
     <Route path="/" element={<Home/>}/>
     <Route path="/Login" element={<Login/>}/>


    </Routes>
   {/* <Home/>

<Login/> */}

  </div>  );
}

export default App;
