import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Admin from "./Components/Admin";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Papers from "./Components/Home/Material"
import { WindowSharp } from "@mui/icons-material";

const THEME = createTheme({
  palette: {
    primary: {
      light: '#66646d',
      main: '#24222F',
      dark: '#191821',
      contrastText: '#D4CDF4',
    },
    secondary: {
      light: '#c2cfe4',
      main: '#a8bbd9',
      dark: '#647082',
      contrastText: '#fff',
    },
  },
  typography: {
   "fontFamily": `'Montserrat', sans-serif;`,
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
      <Routes>
        <Route path="/" element={<Home isAdmin={false}/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/adminDashboard" element={<AdminDashboard/>}/>
        <Route path="/:papers" element={<Papers/>}/>
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
