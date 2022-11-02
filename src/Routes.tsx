import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Admin from 'pages/Admin';
import Auth from 'pages/Admin/Auth';
import ClassRoom from 'pages/ClassesRoom';
import ClassRoomDetails from 'pages/ClassRoomDetails';
import LectureDetails from 'pages/LectureDetails';
import Lectures from 'pages/Lectures';
import MessageDetails from 'pages/MessageDetails';
import Messages from 'pages/Messages';
import Psychographies from 'pages/Psychographies';
import PsychographyDetails from 'pages/PsychographyDetails';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
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
      <Redirect from="/admin/auth" to="/admin/auth/login" exact />
      <Route path="/admin/auth">
        <Auth />
      </Route>
      <Redirect from="/admin" to="/admin/classes" exact />
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
