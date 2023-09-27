
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"



function App() {
   
    return (
   <div className="main">
    <Router>
    <Routes>
    <Route exact path ="/" element= { <Home/>}/>
    <Route path = "/login" element= {<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    </Router>
   </div>
  )
}

export default App;
