import {Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Welcome  from "./components/Welcome/Welcome";
import AddDog from "./components/AddDog/AddDog";
import DogDetails from "./components/DogDetails/DogDetails";
import {fetchDogs} from "./Redux/actions";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import NotFound from "./components/NotFound/NotFound";



function App() {
    

  return (
      <div>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path={"/dog/add"}>
            <AddDog />
          </Route>
          <Route exact path='/dog/:id'>
            <DogDetails />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
      </div>
  );
}

export default App;
