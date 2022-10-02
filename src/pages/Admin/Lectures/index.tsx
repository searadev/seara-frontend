import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

import './styles.css';

const Lectures = () => {
  return (
    <Switch>
      <Route path="/admin/lectures" exact>
        <List />
      </Route>
      <Route path="/admin/lectures/:lecturesId">
        <Form />
      </Route>
    </Switch>
  );
};

export default Lectures;
