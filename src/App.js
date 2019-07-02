import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/Routes";
import './App.scss';
import LayoutContainer from './containers/LayoutContainer/LayoutContainer';

function App(props) {
  return (
    <div>
      <Router>
        <LayoutContainer {...props}>
      

        
        </LayoutContainer>
      </Router>
    </div>
  );
}

export default App;
