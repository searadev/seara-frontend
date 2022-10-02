
import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router-dom';
import Classes from './Classes';
import Lectures from './Lectures';
import Mediuns from './Mediuns';
import Messages from './Messages';
import Modules from './Modules';
import Navbar from './Navbar';
import Psychographies from './Psychographies';
import './styles.css';
import Users from './Users';

const Admin = () => {
    

    return (
        <div className="admin-container">
            <Navbar />
            <div className="admin-content">
                <Switch>
                    <PrivateRoute path="/admin/classes">
                        <Classes />
                    </PrivateRoute>
                    <PrivateRoute path="/admin/lectures">
                        <Lectures />
                    </PrivateRoute>
                    <PrivateRoute path="/admin/messages">
                        <Messages />
                    </PrivateRoute>
                    <PrivateRoute path="/admin/psychographies">
                        <Psychographies />
                    </PrivateRoute>
                    <PrivateRoute path="/admin/modules">
                        <Modules />
                    </PrivateRoute>
                    <PrivateRoute path="/admin/mediuns" roles={['ROLE_ADMIN']}>
                        <Mediuns />
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