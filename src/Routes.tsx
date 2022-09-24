import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import ClassRoom from "pages/ClassesRoom";
import Lectures from "pages/Lectures";
import Messages from "pages/Messages";
import Psychographies from "pages/Psychographies";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Routes = () => (

    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Messages />
            </Route>
            <Route path="/psychography">
                <Psychographies />
            </Route>
            <Route path="/lecture">
                <Lectures />
            </Route>
            <Route path="/classroom">
                <ClassRoom />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>

);

export default Routes;