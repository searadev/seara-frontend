
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
                    <PrivateRoute path="/admin/classes" roles={['ROLE_OPERATOR']}>
                        <h1>Aulas</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/lectures" roles={['ROLE_OPERATOR']}>
                        <h1>Palestras</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/messages" roles={['ROLE_OPERATOR']}>
                        <h1>Mensagens</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/psychographies" roles={['ROLE_OPERATOR']}>
                        <h1>Psicografias</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/mediuns" roles={['ROLE_ADMIN']}>
                        <h1>Médiuns</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
                        <Users />
                    </PrivateRoute>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;