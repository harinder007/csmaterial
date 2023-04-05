import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


function Navbar() {
    return (
      <div className="Navbar">
        <ul className="menu">
            <Button><Link to="/">Home</Link></Button>
            <Button><Link to="/about">About</Link></Button>
            <Button><Link to="/contact">Contact</Link></Button>
            <Button><Link to="/admin">Admin</Link></Button>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  