import Link from 'next/link';
import Button from '@mui/material/Button';
import { useState } from 'react';

const style = {
  fontWeight: '800',
  fontSize: '1.2rem',
};

function Navbar({ tab }) {
  const [dropdownNav, setDropdownNav] = useState(false);

  const navHandle = () => {
    if (dropdownNav) {
      setDropdownNav(false);
    } else {
      setDropdownNav(true);
    }
  };

  const homeMenu = (
    <>
      <Button>
        <Link href="/" style={{ ...style, color: '#FFB524' }}>
          Home
        </Link>
      </Button>
      <Button variant="disabled" style={style}>
        <Link href="/">
          <span className="icon-link">Projects</span>
        </Link>
      </Button>
      <Button>
        <Link href="/about" style={style}>
          About
        </Link>
      </Button>
    </>
  );

  const projectMenu = (
    <>
      <Button>
        <Link href="/" style={style}>
          Home
        </Link>
      </Button>
      <Button style={{ ...style, color: '#FFB524' }}>
        <Link href="/">Projects</Link>
      </Button>
      <Button>
        <Link href="/about" style={style}>
          About
        </Link>
      </Button>
    </>
  );

  const aboutMenu = (
    <>
      <Button>
        <Link href="/" style={style}>
          Home
        </Link>
      </Button>
      <Button variant="disabled" style={style}>
        <Link href="/">
          <span className="icon-link">Projects</span>
        </Link>
      </Button>
      <Button>
        <Link href="/about" style={{ ...style, color: '#FFB524' }}>
          About
        </Link>
      </Button>
    </>
  );

  let menu = homeMenu;

  if (tab === 'home') {
    menu = homeMenu;
  } else if (tab === 'project') {
    menu = projectMenu;
  } else {
    menu = aboutMenu;
  }

  return (
    <nav className={dropdownNav ? 'navbar nav-open' : 'navbar'}>
      <a href="/">
        <h2 className="logo">
          csmaterial<span>.in</span>
        </h2>
      </a>
      <button className="nav-btn" onClick={navHandle}>
        <span className="menu-btn">
          <i class="ph-bold ph-list"></i>
        </span>
        <span className="close-btn">
          <i class="ph-bold ph-x"></i>
        </span>
      </button>
      <ul className="menu">{menu}</ul>
    </nav>
  );
}

export default Navbar;
