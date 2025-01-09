import Headline from "./Components/Headline";
import "./App.css";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterCard from "./Components/Register";
import LoginCard from "./Components/Login";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path=" Login" element={<Login />} />
        <Route path=" Register" element={<Register />} />
        <Route path=" Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
