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
      <div className="App">
        <Headline />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<RegisterCard />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
