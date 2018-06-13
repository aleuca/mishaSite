let React = require('react');
let css = require('./css/index.css');
import { Link } from 'react-router-dom';


// in componentDidMount, use fs.readFileSync() to get projects from a .json file in api/projects.json
// in the api, make routes for listing projects, creating projects, and updating projects
// add a property to each project called "archived: true/false" which prevents it from being displayed
    // until he's ready for it to be shown (or acts as a soft-delete)
// protect these routes with authentication

let projects = [{
    name: "name",
    desc: "Sunt anim cillum ullamco est tempor magna. Ea dolore nisi anim ea et proident ullamco esse sunt qui adipisicing velit. Incididunt dolore Lorem velit id duis reprehenderit consectetur consectetur eiusmod magna sit id nulla. Irure eu minim duis incididunt pariatur. Aliquip velit aliqua mollit minim pariatur laboris sunt Lorem minim fugiat laboris eu elit incididunt. Est voluptate pariatur enim tempor velit pariatur. Eu incididunt consectetur dolore dolore aliqua id aliquip esse velit ex ad et reprehenderit.",
    link: "http://google.com",
    pic: "picture",
},
{
    name:"name2",
    desc: "Velit non ipsum ea mollit eu Lorem occaecat non. Velit mollit minim amet labore magna cillum eu ea. Ipsum mollit cupidatat eiusmod officia non fugiat veniam. Reprehenderit culpa cillum exercitation minim labore proident velit id dolore. Cillum ad nostrud ut ea anim esse ut consectetur ullamco.",
    link: "http://google.com",
    pic: "picture"
},
{
    name:"name3",
    desc: "Minim id veniam sit aute nisi anim occaecat. Laborum ad voluptate id laborum aliqua enim in nulla voluptate cupidatat culpa in nisi. Labore proident adipisicing occaecat est anim sit. Eiusmod duis commodo velit eu. Consequat commodo do minim sunt fugiat aliquip nisi proident consequat. Excepteur cupidatat do ea sunt ullamco eiusmod et laborum. Sint incididunt laborum nisi eu ad.",
    link: "http://google.com",
    pic: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
}]

class ProjectPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const projectDiv = projects.map(project => <Project name={project.name} desc={project.desc} pic={project.pic} />)

        return(
            <div className='container'>
                <h1>These are my projects</h1>
                <div>
                    {projectDiv}
                </div>
            </div>
        );
    }
}

class Project extends React.Component {
    render () {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>
                <a href={this.props.link}>Link to it</a>
                <img src={this.props.pic}/>
            </div>
        )
    }
}

module.exports = ProjectPage

//pro, name, desc, link, pic
