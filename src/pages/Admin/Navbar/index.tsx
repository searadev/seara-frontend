import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark admin-nav-container">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#admin-navbar"
                aria-controls="admin-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
            </button>            
            <div className='collapse navbar-collapse admin-nav-content' id="admin-navbar">
                <ul className="">
                    <li>
                        <NavLink to='/admin/classes' className='admin-nav-item'>
                            <p>Aulas</p>
                        </NavLink>                    
                    </li>
                    <li>
                        <NavLink to='/admin/lectures' className='admin-nav-item'>
                            <p>Palestras</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin/messages' className='admin-nav-item'>
                            <p>Mensagens</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin/psychographies' className='admin-nav-item'>
                            <p>Psicografias</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin/mediuns' className='admin-nav-item'>
                            <p>Médiuns</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin/users' className='admin-nav-item'>
                            <p>Usuários</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
}

export default Navbar;