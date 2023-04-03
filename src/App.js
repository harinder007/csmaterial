import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Admin from "./Components/Admin";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home isAdmin={false}/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/adminDashboard" element={<AdminDashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
