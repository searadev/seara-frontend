
import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';
import Users from './User';

const Admin = () => {
    

    return (
        <div className="admin-container">
            <Navbar />
            <div className="admin-content">
                <Switch>
                    <PrivateRoute path="/admin/classes">
                        <h1>Aulas</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/lectures">
                        <h1>Palestras</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/messages">
                        <h1>Mensagens</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/psychographies">
                        <h1>Psicografias</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/mediuns">
                        <h1>Médiuns</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/users">
                        <Users />
                    </PrivateRoute>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;