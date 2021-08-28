import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import {history} from './helpers/history'



import './App.css'
import Typography from "@material-ui/core/Typography";
import Homepage from "./pages/HomePage";
import Navbar from "./components/Navbar";
//import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Uploader from './pages/uploadTest';
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";


function App() {
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };


  return (
    <Router history={history}>
    <div>
   
      <Navbar/>
     
     
     
     
      
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/uploadTest" component={Uploader} />
        </Switch>
        
      
    </div>
    </Router>
  );
}

export default App;
