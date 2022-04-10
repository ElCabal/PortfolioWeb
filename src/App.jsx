import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-800 h-screen ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
