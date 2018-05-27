let React = require('react');
let css = require('./css/home.css');
import { Link } from 'react-router-dom';




class Home extends React.Component {
    render() {
        return(
            <div className='homepage-body'>
                {/* <img src={require('./css/images/bb8.jpeg')}/> */}
            </div>
        );
    }
}



module.exports = Home
