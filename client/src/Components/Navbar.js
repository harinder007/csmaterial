import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [dropdownNav, setDropdownNav] = useState(false);

  const navHandle = () => {
    if (dropdownNav) {
      setDropdownNav(false);
    } else {
      setDropdownNav(true);
    }
  };

  return (
    <nav className={dropdownNav ? 'navbar nav-open' : 'navbar'}>
      <Link href="/">
        <h2 className="logo">
          csmaterial<span>.in</span>
        </h2>
      </Link>
      <button className="nav-btn" onClick={navHandle}>
        <span className="menu-btn">
          <MenuIcon />
        </span>
        <span className="close-btn">
          <CloseIcon />
        </span>
      </button>
      <ul className="menu">
        <Link href="/">HOME</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/about">ABOUT</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
