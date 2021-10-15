import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Welcome } from "./components/Welcome/Welcome";




function App() {
  return (
    
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
