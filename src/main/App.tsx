import React from 'react';

import './App.css';
import Header from "../Components/Header/Header";
import Routes from "../Routes/Routes";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Routes/>
      </HashRouter>
    </div>
  );
}

export default App;
