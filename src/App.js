import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import TeamDetail from './Components/TeamDetail/TeamDetail';

function App() {
  return (
   <Router>
     <Header></Header>
     <Switch>
       <Route exact path='/'>
        <Home></Home>
       </Route>
       <Route path='/home'>
        <Home></Home>
        </Route>
        <Route path='/team/:teamId'>
          <TeamDetail></TeamDetail>
        </Route>
     </Switch>
   </Router>
  );
}

export default App;
