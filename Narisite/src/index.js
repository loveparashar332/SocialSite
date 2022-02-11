import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Dashboard from "./Components/Dashboard"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Article from "./Components/Article"
import MyEditor from "./Components/MyEditor"
import Mainpage from './Components/Mainpage'
import Safety from './Components/Safety';
import NariChatbot from './Components/NariCharbot';
import './assets/css/style.css'
import ArticleList from './Components/ArticleList';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component = {Mainpage} />
            <Route  path="/" component = {NariChatbot} />
            <Route path="/login" component={Login} /> 
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/safety" component={Safety}/>
            <Route path="/articlelist/cooking" component={ArticleList} />
            <Route path="/article" component={Article} />
            <Route path="/editor" component={MyEditor} />
           
            
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


