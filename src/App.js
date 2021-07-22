import React from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
     <NavBar />
     <Switch>
     <Route exact path="/" component={MainPage}/>
     <Route exact path="/all" component={AllUser}/>
     <Route exact path="/add" component={AddUser}/>
     <Route exact path="/edit/:id" component={EditUser}/>
     <Route component={NotFound}/>
     </Switch>
     </BrowserRouter>
    </>
  );
}

export default App;
