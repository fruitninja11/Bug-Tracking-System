import React, { Component } from 'react';
import Projectservice from '../../../services/Projectservice';
import FooterComponent from '../../FooterComponent';
import HeaderComponent from '../../HeaderComponent';

class ProjectsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: []
        }

        this.addProject = this.addProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);

    }

    componentDidMount() {
        /* If you need to load data from a remote endpoint here java, 
        this is a good place to instantiate the network request.
        componentDidMount() is invoked immediately after a component is mounted */
        Projectservice.getAllProjects().then((res) => {
            this.setState({ projects: res.data });
            console.log(res.data);
        });
    }

    addProject(){
        this.props.history.push('/addproject');
    }

    deleteProject(projectid){
        Projectservice.deleteProject(projectid).then(res=>{
            alert("Project Deleted");
            this.setState({projects:this.state.projects.filter(project => project.projectid !== projectid)})
        })
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="container">
                    <h2 className='text-center'>Projects List</h2>
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>Project Name</th><th>Project Type</th><th>Technology</th><th>Client</th><th>Description</th><th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.projects.map(
                                                project =>
                                                    <tr key={project.projectid}>
                                                        <td>{project.pname}</td>
                                                        <td>{project.ptype}</td>
                                                        <td>{project.technology}</td>
                                                        <td>{project.client}</td>
                                                        <td>{project.pdesc}</td>
                                                        
                                                        <td>{/* <button className="btn btn-info btn-sm" onClick={() => this.updateEmployee(project.empid)}>Update</button> */}
                                                            {/*  <button style={{ marginLeft: "15px" }} className="btn btn-info" onClick={() => this.viewEmployee(employee.empid)}>View</button> */}
                                                            <button style={{ marginLeft: "15px" }} className="btn btn-danger btn-sm" onClick={() => this.deleteProject(project.projectid)}>Delete</button>
                                                        </td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                                
                            </div>
                            <div className="text-center"><button className="btn btn-info" onClick={() => this.addProject()}>Add Project</button></div>
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
        );
    }
}

export default ProjectsComponent;