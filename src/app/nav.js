let React = require('react');
let css = require('./css/nav.css');

class NavBar extends React.Component {
    render() {
        return(
            <div class='nav'>
                <ul class='nav-bar'>
                    <a class='nav-element' href='/'>Home</a>
                    <a class='nav-element' href='/about'>About</a>
                    <a class='nav-element' href='projects'>Projects</a>
                    <a class='nav-element' href='http://linkedin.com'>Linkedin</a>
                    <a class='nav-element' href='http://github.com'>Github</a>
                    <a class='nav-element' href='http://facebook.com'>Facebook</a>
                </ul>
            </div>
        )
    }
}

module.exports = NavBar