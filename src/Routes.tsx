import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import Class from "pages/Class";
import Lecture from "pages/Lecture";
import Message from "pages/Message";
import Psychography from "pages/Psychography";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Routes = () => (

    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Message />
            </Route>
            <Route path="/psychography">
                <Psychography />
            </Route>
            <Route path="/lecture">
                <Lecture />
            </Route>
            <Route path="/class">
                <Class />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>

);

export default Routes;