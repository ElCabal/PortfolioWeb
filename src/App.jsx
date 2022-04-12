import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-center items-center font-poppins">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
