let React = require('react');
let css = require('./css/index.css');
import { Link } from 'react-router-dom';





class Home extends React.Component {
    render() {
        return(
            <div className='homepage-body'>
                <h1 className='homepage-header'>Hi, I'm Misha. Mechanical engineer, builder & maker of </h1>
                <h1 className='homepage-subheader'>robotic arms, legs, and other extremities.</h1>

            </div>
        );
    }
}



module.exports = Home
