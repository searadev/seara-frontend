import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { NavLink } from 'react-router-dom';
import { hasAnyRoles } from 'util/auth';

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <div className="admin-nav-content">
        <ul className='admin-nav-items-container'>
          <li>
            <NavLink to="/admin/classes" className="admin-nav-item">
              <p>Aulas</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/lectures" className="admin-nav-item">
              <p>Palestras</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/messages" className="admin-nav-item">
              <p>Mensagens</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/psychographies" className="admin-nav-item">
              <p>Psicografias</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/modules" className="admin-nav-item">
              <p>Módulos</p>
            </NavLink>
          </li>
          {hasAnyRoles(['ROLE_ADMIN']) && (
            <>
              <li>
                <NavLink to="/admin/mediuns" className="admin-nav-item">
                  <p>Médiuns</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/users" className="admin-nav-item">
                  <p>Usuários</p>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
