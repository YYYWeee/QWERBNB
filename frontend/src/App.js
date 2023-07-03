// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Spots from "./components/Spot/Spots";
import CurrentUserSpots from "./components/Spot/CurrentUserSpots";
import NewSpotForm from "./components/Spot/NewSpotForm";
import EditSpotForm from "./components/Spot/EditSpotForm";
import SpotDetail from "./components/Spot/SpotDetail";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded &&
        <Switch>
          <Route exact path="/" component={Spots} />
          <Route path="/spots/current" component={CurrentUserSpots} />
          <Route path="/spots/new" component={NewSpotForm} />
          <Route path="/spots/:id/edit" component={EditSpotForm} />
          <Route path="/spots/:id" component={SpotDetail} />
        </Switch>}
    </>
  );
}

export default App;
