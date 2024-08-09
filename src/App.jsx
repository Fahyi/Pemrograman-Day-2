import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tugas1 from "./pages/Tugas1";
import Tugas2 from "./pages/Tugas2";
import Tugas3 from "./pages/Tugas3";
import Tugas4 from "./pages/Tugas4";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/tugas1" element={<Tugas1 />}></Route>
        <Route path="/tugas2" element={<Tugas2 />}></Route>
        <Route path="/tugas3" element={<Tugas3 />}></Route>
        <Route path="/tugas4" element={<Tugas4 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
