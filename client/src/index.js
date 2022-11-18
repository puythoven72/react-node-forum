import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

import { Route, Routes } from "react-router-dom"
import Question from "./components/pages/Questions";
import Content from "./components/pages/Content";
import Header from "./components/pages/Header"
import SideNavigation from "./components/pages/SideNav"



ReactDOM.render(
 
  <Router>
    <Header />
    <App/>
</Router>,
document.getElementById('root')
);





