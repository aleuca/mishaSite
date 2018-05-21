let React = require('react');
let css = require('./css/project.css');
import { Link } from 'react-router-dom';

let projects = [{
    name: 'blah',
    description: 'blah'
},
{
    name: 'that',
    description: 'that'
}]

class ProjectPage extends React.Component {
    render() {
        let projectDivs = projects.map(project => <Project name={project.name} description={project.description}/> )
        return(
            <div>
                {projectDivs}
            </div>  
        );
    }
}

class Project extends React.Component {
    render () {
        return (
            <div>
                <h1> {this.props.name}</h1>
                <p> {this.props.description}</p>
            </div>
        )
    }
}



module.exports = ProjectPage