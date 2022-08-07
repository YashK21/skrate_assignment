import "./App.css";
import Dashboard from "./comp/Dashboard";
import Login from "./comp/Login";
import { Route, Routes } from "react-router-dom";

// import "../src/comp/Login";
function App() {
  return (
    <div className="App">
   <Routes>    
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
