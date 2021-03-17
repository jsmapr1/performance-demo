import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Debug from './components/debug/App/App';
import Expensive from './components/expensive/App/App';
import Reference from './components/reference/App/App';
import Slow from './components/slow/App/App';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/debug">01 Debug</Link>
            </li>
            <li>
              <Link to="/slow">02 Slow</Link>
            </li>
            <li>
              <Link to="/expensive">03 Expensive</Link>
            </li>
            <li>
              <Link to="/reference">04 Reference</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/reference">
            <Reference />
          </Route>
          <Route path="/expensive">
            <Expensive />
          </Route>
          <Route path="/slow">
            <Slow />
          </Route>
          <Route path="/">
            <Debug />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
