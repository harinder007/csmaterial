import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Admin from "./Components/Admin";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const THEME = createTheme({
  palette: {
    primary: {
      light: '#f6685e',
      main: '#f44336',
      dark: '#aa2e25',
      contrastText: '#fff',
    },
    secondary: {
      light: '#cfd8dc',
      main: '#607d8b',
      dark: '#37474f',
      contrastText: '#fff',
    },
  },
  typography: {
   "fontFamily": `'Poppins', sans-serif;`,
   "fontSize": 16,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

function App() {
  return (
      <ThemeProvider theme={THEME}>
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
      </ThemeProvider>
  );
}

export default App;
