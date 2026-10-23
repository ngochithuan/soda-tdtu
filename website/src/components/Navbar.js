import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Conduct', href: '/conduct' },
  { label: 'GPA Calc', href: '/gpa-calc' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          className="navbar-logo"
          src={`${process.env.PUBLIC_URL}/closure.png`}
          alt="Soda logo"
        />
        <span className="navbar-title">Soda</span>
      </div>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.href}>
            <NavLink to={link.href} end>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
