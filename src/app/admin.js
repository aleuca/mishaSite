let React = require('react');
let ReactDOM = require('react-dom');
let css = require('./css/index.css');
import { Link } from 'react-router-dom';

class Admin extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <label>
                        Username:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" /> 
                </form>
            </div>
        )
    }
}






module.exports = Admin