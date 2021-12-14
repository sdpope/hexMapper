import { BrowserRouter, Switch, Route } from "react-router-dom";
import MapTest from "./components/MapTest";
import styled from "styled-components";
import Sandbox from "./components/sandbox";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Editor from "./components/editor/Editor";
import RepresentAPI from "./components/RepresentAPI";
import GetStarted from "./components/GetStarted";
import Main from "./components/Main";


function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <LeftPanel />
        <InnerWrapper>
        <Switch>
          <Route path="/" exact>
          <Main />
          </Route>
          <Route path="/about" exact>
            <p>About page</p>
          </Route>
          <Route path="/sandbox" exact> 
            <Sandbox />
          </Route>
          <Route path="/editor">
            <Editor />
          </Route>
          <Route path="/maptest">
            <MapTest />
          </Route>
          <Route path="/reptest">
            <RepresentAPI />
          </Route>
        </Switch>
        </InnerWrapper>
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

const InnerWrapper = styled.div`
width: 60%;
`