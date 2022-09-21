import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>SEARA DE JESUS</h4>
        </a>
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
              <a href="link" className="active">MENSAGENS MOTIVACIONAIS</a>
            </li>
            <li>
              <a href="link">PSICOGRAFIAS</a>
            </li>
            <li>
              <a href="link">PALESTRAS</a>
            </li>
            <li>
              <a href="link">AULAS</a>
            </li>
            <li>
              <a href="link">ADMIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
