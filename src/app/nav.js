let React = require('react');
let css = require('./css/nav.css');



class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <nav class='nav-bar'>
                    <a class='nav-element'>Home</a>
                    <a class='nav-element'>About</a>
                    <a class='nav-element'>Projects</a>
                    <a class='nav-element' href='linkedin.com'>Linkedin</a>
                    <a class='nav-element' href='github.com'>Github</a>
                    <a class='nav-element' href='facebook.com'>Facebook</a>
                </nav>
            </div>
        )
    }
}

module.exports = NavBarComponent