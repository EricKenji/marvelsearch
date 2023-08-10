import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import routes
import Home from "./routes/Home";
import HeroDetails from "./routes/HeroDetails";
// import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/:id'} element={<HeroDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;
