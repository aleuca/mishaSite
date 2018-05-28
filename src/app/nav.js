let React = require('react');
let css = require('./css/index.css');


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <nav>
                    <ul class='nav'>
                        <li class='internal'><a class='nav-element home' href='/'>Home</a></li>
                        <li class='internal'><a class='nav-element about' href='/about'>About</a></li>
                        <li class='internal'><a class='nav-element projects' href='projects'>Projects</a></li>
                        {/* <li class='internal logo'><span class='nav-element'>MS</span></li> */}
                        <li class='external'><a class='nav-element linkedin' href='http://linkedin.com'>Linkedin</a></li>
                        <li class='external'><a class='nav-element github' href='http://github.com'>Github</a></li>
                        <li class='external'><a class='nav-element facebook' href='http://facebook.com'>Facebook</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

module.exports = NavBar