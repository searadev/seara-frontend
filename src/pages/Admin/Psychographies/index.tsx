import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

import './styles.css';

const Psychographies = () => {
  return (
    <Switch>
      <Route path="/admin/psychographies" exact>
        <List />
      </Route>
      <Route path="/admin/psychographies/:psychographiesId">
        <Form />
      </Route>
    </Switch>
  );
};

export default Psychographies;
