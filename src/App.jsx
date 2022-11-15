import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Home from "./pages/Home";
import Technology from "./components/Technology";

function App() {
  return (
    <div className={`h-full min-h-screen overflow-x-hidden`}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination/:planet" element={<Destination />} />
          <Route path="/crew/:crewId" element={<Crew />} />
          <Route path="/technology/:techId" element={<Technology />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
