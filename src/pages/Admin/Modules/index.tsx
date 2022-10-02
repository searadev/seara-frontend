import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

import './styles.css';

const Modules = () => {
  return (
    <Switch>
      <Route path="/admin/modules" exact>
        <List />
      </Route>
      <Route path="/admin/modules/:modulesId">
        <Form />
      </Route>
    </Switch>
  );
};

export default Modules;
