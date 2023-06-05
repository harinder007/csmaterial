import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [dropdownNav, setDropdownNav] = useState(false);

  const router = useRouter();
  console.log(router.pathname);

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
        <Link href="/" className={router.pathname === '/' && 'btn-active'}>HOME</Link>
        <Link href="/projects" className={router.pathname === '/projects' && 'btn-active'}>PROJECTS</Link>
        <Link href="/about" className={router.pathname === '/about' && 'btn-active'}>ABOUT</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
