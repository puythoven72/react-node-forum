import {React} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from "./components/pages/Header"




ReactDOM.render(
 
  <Router>
    <Header />
    <App/>
</Router>,
document.getElementById('root')
);





