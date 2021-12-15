import { BrowserRouter, Switch, Route } from "react-router-dom";
import MapTest from "./components/MapTest";
import styled from "styled-components";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Editor from "./components/editor/Editor";
import GetStarted from "./components/GetStarted";
import Main from "./components/Main";
import ManageMaps from "./components/ManageMaps";
import GeoMap from "./components/GeoMap";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <LeftPanel />
        <InnerWrapper>
        <NavBar />
        <Switch>
          <Route path="/" exact>
          <Main />
          </Route>
          <Route path="/about" exact>
            <p>About page</p>
          </Route>
          <Route path="/editor">
            <Editor />
          </Route>
          <Route path="/maptest">
            <MapTest />
          </Route>
          <Route path="/manage">
            <ManageMaps />
          </Route>
          <Route path="/geomap">
            <GeoMap />
          </Route>
        </Switch>
        </InnerWrapper>
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
width: 80%;

`