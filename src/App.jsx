import Headline from "./Components/Headline";
import "./App.css";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterCard from "./Components/Register";
import LoginCard from "./Components/Login";
import About from "./Components/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Login" element={<LoginCard />} />
        <Route path="Register" element={<RegisterCard />} />
      </Routes>
    </Router>
  );
}

export default App;
