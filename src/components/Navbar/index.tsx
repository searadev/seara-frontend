import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import history from 'util/history';
import { AuthContext } from 'AuthContext';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';



const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light main-nav">
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
              <NavLink to="/message" activeClassName="active" exact>
                MOTIVACIONAIS
              </NavLink>
            </li>
            <li>
              <NavLink to="/psychography" activeClassName="active">
                PSICOGRAFIAS
              </NavLink>
            </li>
            <li>
              <NavLink to="/lecture" activeClassName="active">
                PALESTRAS
              </NavLink>
            </li>
            <li>
              <NavLink to="/classroom" activeClassName="active">
                AULAS
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName="active">
                ADMIN
              </NavLink>
            </li>
            <li>
              {authContextData.authenticated ? (
                <a href="#logout" onClick={handleLogoutClick}>
                  LOGOUT
                </a>
              ) : (
                <Link to="/admin/auth">LOGIN</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
