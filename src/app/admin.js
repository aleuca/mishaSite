let React = require('react');
let ReactDOM = require('react-dom');
let css = require('./css/index.css');
import { Link } from 'react-router-dom';

class Admin extends React.Component {
    render() {
        return(
            <div>
                <form className='form'>
                    <label>
                        Username:
                        <input className='form-input' type="text"/>
                    </label>
                    <label>
                        Password:
                        <input className='form-input' type="text"/>
                    </label>
                        <input className='login-button' type="submit" value="Login" /> 
                </form>
            </div>
        )
    }
}






module.exports = Admin