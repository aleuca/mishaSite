let React = require('react');
let css = require('./css/nav.css');



class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class='nav'>
                <ul class='nav-bar'>
                    <a class='nav-element' href='/'>Home</a>
                    <a class='nav-element' href='/about'>About</a>
                    <a class='nav-element' href='projects'>Projects</a>
                    <a class='nav-element' href='linkedin.com'>Linkedin</a>
                    <a class='nav-element' href='github.com'>Github</a>
                    <a class='nav-element' href='facebook.com'>Facebook</a>
                </ul>
            </div>
        )
    }
}

module.exports = NavBarComponent