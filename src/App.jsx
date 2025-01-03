import Headline from "./Components/Headline";
import "./App.css";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Headline />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
