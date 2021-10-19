import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Welcome  from "./components/Welcome/Welcome";
import AddDog from "./components/AddDog/AddDog"
import DogDetails from "./components/DogDetails/DogDetails"



function App() {

  return (
      <div>
        <Switch>
          <Route exact path={"/dog/add"}>
            <AddDog />
          </Route>
          <Route exact path='/dog/:id'>
            <DogDetails />
          </Route>

          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
