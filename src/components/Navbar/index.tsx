import './styles.css';
import { ReactComponent as LogoImage} from 'assets/images/result.svg';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from 'AuthContext';
import { getTokenData, isAuthenticated } from 'util/auth';



const Navbar = () => {
  const { setAuthContextData } = useContext(AuthContext);

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

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <LogoImage />
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
              <NavLink to="/home" activeClassName="active" exact>
                ATENDIMENTO
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
              <NavLink to="/message" activeClassName="active" exact>
                MENSAGENS
              </NavLink>
            </li>                                  
            {/*
            <li>
              <NavLink to="/psychography" activeClassName="active">
                PSICOGRAFIAS
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
              */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
