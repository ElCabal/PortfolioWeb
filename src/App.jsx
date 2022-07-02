import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="flex flex-col justify-center items-center font-poppins">
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
