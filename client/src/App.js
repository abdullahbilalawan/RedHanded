import React from "react";

import Typography from "@material-ui/core/Typography";
import Homepage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      
    </div>
  );
}

export default App;
