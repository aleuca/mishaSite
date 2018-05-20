let React = require('react');



class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <nav>
                    <a href='linkedin.com'>Linkedin</a>
                    <a href='github.com'>Github</a>
                    <a href='facebook.com'>Facebook</a>
                </nav>
            </div>
        )
    }
}

module.exports = NavBarComponent