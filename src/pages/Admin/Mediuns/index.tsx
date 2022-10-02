import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

import './styles.css';

const Mediuns = () => {
  return (
    <Switch>
      <Route path="/admin/mediuns" exact>
        <List />
      </Route>
      <Route path="/admin/mediuns/:mediunsId">
        <Form />
      </Route>
    </Switch>
  );
};

export default Mediuns;
