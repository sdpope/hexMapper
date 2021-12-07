import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Sandbox from "./components/sandbox";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";


function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <LeftPanel />
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
        <RightPanel />
      </MainWrapper>
    </BrowserRouter>

    
  );
}

export default App;


const MainWrapper = styled.div` 
display: flex;
flex-direction: row;
div > {margin: 0;}
`;