import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";

const style = {
  fontWeight:"800",
  fontSize:"1.2rem"
}


function Navbar({tab}) {

  const [dropdownNav, setDropdownNav] = useState(false);

  const navHandle = ()=> {
    if(dropdownNav){
      setDropdownNav(false);
    }
    else {
      setDropdownNav(true);
    }
  }

  

  const homeMenu = (
    <>
      <Button><Link to="/" style={{...style, color:"#FFB524"}}>Home</Link></Button>
      <Button variant="disabled" style={style}><Link to="/"><span className="icon-link">Projects</span></Link></Button>
      <Button><Link to="/about" style={style}>About</Link></Button>
    </>
  )

  const projectMenu = (
    <>
      <Button><Link to="/" style={style}>Home</Link></Button>
      <Button style={{...style, color:"#FFB524"}}><Link to="/">Projects</Link></Button>
      <Button><Link to="/about" style={style}>About</Link></Button>
    </>
  )

  const aboutMenu = (
    <>
      <Button><Link to="/" style={style}>Home</Link></Button>
      <Button variant="disabled" style={style}><Link to="/"><span className="icon-link">Projects</span></Link></Button>
      <Button><Link to="/about" style={{...style, color:"#FFB524"}}>About</Link></Button>
    </>
  )

  let menu = homeMenu;

  if(tab === "home"){
    menu = homeMenu;
  }
  else if(tab === "project"){
    menu = projectMenu;
  }
  else{
    menu = aboutMenu;
  }

    return (
      <nav className={dropdownNav ? "navbar nav-open" : "navbar"}>
        <h2 className="logo">csmaterial<span>.in</span></h2>
        <button className="nav-btn" onClick={navHandle}>
          <span className="menu-btn">
            <i class="ph-bold ph-list"></i>
          </span>
          <span className="close-btn">
            <i class="ph-bold ph-x"></i>
          </span>
        </button>
        <ul className="menu">
            {menu}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  