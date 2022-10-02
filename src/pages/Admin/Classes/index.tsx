import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

import './styles.css';

const Classes = () => {
  return (
    <Switch>
      <Route path="/admin/classes" exact>
        <List />
      </Route>
      <Route path="/admin/classes/:classesId">
        <Form />
      </Route>
    </Switch>
  );
};

export default Classes;
