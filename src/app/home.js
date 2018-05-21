let React = require('react');
// let css = require('./css/home.css');
import { Link } from 'react-router-dom';
// import image from 'image-webpack-loader';
// const image = require('./css/images/bb8.jpeg')

class Home extends React.Component {
    render() {
        return(
            <div>
                <image src='css/images/bb8.jpeg'/>
            </div>
        );
    }
}



module.exports = Home
