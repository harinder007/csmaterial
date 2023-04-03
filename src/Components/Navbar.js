import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="Navbar">
        <ul className="menu">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
            <li className="nav-item"><Link to="/admin">Admin</Link></li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  