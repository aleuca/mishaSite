let React = require('react');
let ReactDOM = require('react-dom');
let css = require('./css/index.css');
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';

// modules

let Home = require('./home');
let About = require('./about');
let ProjectPage = require('./project');
let NavBar = require('./nav');
let Admin = require('./admin');



class App extends React.Component {
    render() {
        const routes = [
            <Route exact path='/' component={Home}></Route>,
            <Route exact path='/about' component={About}></Route>,
            <Route exact path='/projects' component={ProjectPage}></Route>,
            <Route exact path='/login' component={Admin}></Route>
          ];
        return(
            <div>
                <NavBar/>
                <BrowserRouter>
                    <Switch> 
                        {routes}
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));