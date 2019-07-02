import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import LayoutContainer from './containers/LayoutContainer/LayoutContainer';

function App() {
  return (
    <div>
      <Router>
          <LayoutContainer>     

          </LayoutContainer>
      </Router>
    </div>
  );
}

export default App;
