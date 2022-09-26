import './styles.css';
import 'bootstrap/js/src/collapse.js';

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
                        <a href='link' className='admin-nav-item active'><p>Aulas</p></a>                    
                    </li>
                    <li>
                        <a href='link' className='admin-nav-item'><p>Palestras</p></a>
                    </li>
                    <li>
                        <a href='link' className='admin-nav-item'><p>Mensagens</p></a>
                    </li>
                    <li>
                        <a href='link' className='admin-nav-item'><p>Psicografias</p></a>
                    </li>
                    <li>
                        <a href='link' className='admin-nav-item'><p>Médiuns</p></a>
                    </li>
                    <li>
                        <a href='link' className='admin-nav-item'><p>Usuários</p></a>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
}

export default Navbar;