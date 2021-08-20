import React from "react";

import Typography from "@material-ui/core/Typography";
import Homepage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      
    </div>
  );
}

export default App;
