
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';
import Users from './User';

const Admin = () => {
    

    return (
        <div className="admin-container">
            <Navbar />
            <div className="admin-content">
                <Switch>
                    <Route path="/admin/classes">
                        <h1>Aulas</h1>
                    </Route>
                    <Route path="/admin/lectures">
                        <h1>Palestras</h1>
                    </Route>
                    <Route path="/admin/messages">
                        <h1>Mensagens</h1>
                    </Route>
                    <Route path="/admin/psychographies">
                        <h1>Psicografias</h1>
                    </Route>
                    <Route path="/admin/mediuns">
                        <h1>Médiuns</h1>
                    </Route>
                    <Route path="/admin/users">
                        <Users />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;