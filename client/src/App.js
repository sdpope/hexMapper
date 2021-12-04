import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sandbox from "./sandbox";


function App() {
  return (
    <BrowserRouter>
      <div>
        Hello
      </div>
      <Switch>
        <Route path="/" exact>
        <p> Main page</p>
        </Route>
        <Route path="/about" exact>
          <p>About page</p>
        </Route>
        <Route path="/sandbox" exact> 
          <Sandbox />
        </Route>
      </Switch>
    </BrowserRouter>

    
  );
}

export default App;
