import "./components/HomePage/index"
import "./components/AboutMe/index"
import HomePage from "./components/HomePage/index";
import AboutMe from "./components/AboutMe/index";

const page = window.location.pathname === '/' ? <HomePage/> : <AboutMe/>

function App() {
  return page;
}

export default App;
