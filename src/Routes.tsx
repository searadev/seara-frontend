import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import ClassRoom from "pages/ClassesRoom";
import ClassRoomDetails from "pages/ClassRoomDetails";
import LectureDetails from "pages/LectureDetails";
import Lectures from "pages/Lectures";
import MessageDetails from "pages/MessageDetails";
import Messages from "pages/Messages";
import Psychographies from "pages/Psychographies";
import PsychographyDetails from "pages/PsychographyDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Routes = () => (

    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Messages />
            </Route>
            <Route path="/message" exact>
                <Messages />
            </Route>
            <Route path="/message/:messageId">
                <MessageDetails />
            </Route>
            <Route path="/psychography" exact>
                <Psychographies />
            </Route>
            <Route path="/psychography/:psychographyId">
                <PsychographyDetails />
            </Route>
            <Route path="/lecture" exact>
                <Lectures />
            </Route>
            <Route path="/lecture/:lectureId">
                <LectureDetails />
            </Route>
            <Route path="/classroom" exact>
                <ClassRoom />
            </Route>
            <Route path="/classroom/:classroomId">
                <ClassRoomDetails />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>

);

export default Routes;