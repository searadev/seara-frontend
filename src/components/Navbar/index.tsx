import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>SEARA DE JESUS</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#searadev-navbar"
          aria-controls="searadev-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="searadev-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>MENSAGENS MOTIVACIONAIS</NavLink>
            </li>
            <li>
              <NavLink to="/psychography" activeClassName="active">PSICOGRAFIAS</NavLink>
            </li>
            <li>
              <NavLink to="/lecture" activeClassName="active">PALESTRAS</NavLink>
            </li>
            <li>
              <NavLink to="/classroom" activeClassName="active">AULAS</NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName="active">ADMIN</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
