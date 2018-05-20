let React = require('react');
let ReactDOM = require('react-dom');
let css = require('./css/index.css');
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';

// modules

let HomeComponent = require('./home');
let AboutComponent = require('./about');
let ProjectComponent = require('./project');
let NavBarComponent = require('./nav');



class App extends React.Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Switch> 
                        <Route exact path='/' component={HomeComponent}></Route>
                        <Route exact path='/about' component={AboutComponent}></Route>
                        <Route exact path='/projects' component={ProjectComponent}></Route>
                    </Switch>
                </BrowserRouter> 
                <NavBarComponent/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));