import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

import './styles.css';

const Messages = () => {
  return (
    <Switch>
      <Route path="/admin/messages" exact>
        <List />
      </Route>
      <Route path="/admin/messages/:messageId">
        <Form />
      </Route>
    </Switch>
  );
};

export default Messages;
