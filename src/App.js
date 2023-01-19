import React from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
