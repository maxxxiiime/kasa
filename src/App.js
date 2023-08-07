
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
