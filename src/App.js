import "./components/HomePage/index"
import "./components/AboutMe/index"
import HomePage from "./components/HomePage/index";
import AboutMe from "./components/AboutMe/index";
import Menu from "./components/Menu/index"
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const page = window.location.pathname === '/' ? <HomePage/> : <AboutMe/>

function App() {
  return (
    <BrowserRouter>
    <Menu/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/SobreMim" element={<AboutMe/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;