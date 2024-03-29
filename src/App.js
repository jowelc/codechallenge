import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Challenge from './components/Challenge'

function App() {
  return (
    <div className="App">
    <Router>
      <>
      <Header />
      <AppBody>
        <Sidebar />
        <Switch>
            <Route path="/" exact>
              <Challenge />
            </Route>
        </Switch>
      </AppBody>
      </>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
