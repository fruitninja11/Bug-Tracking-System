import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FetchProject from '../../services/FetchProject';
class ProjectBugs extends Component {
    constructor(props){
        super(props)

        this.state={
            projectid:this.props.match.params.projectid,
            bugs:[]
        }
        this.addBug = this.addBug.bind(this);
        this.updateBug = this.updateBug.bind(this);
        //this.deleteBug = this.deleteBug.bind(this);
    }

    componentDidMount(){
        FetchProject.getBugsForProject(this.state.projectid).then(res => {
            this.setState({
                bugs: res.data
            });
            console.log(res.data);
        })
    }

    addBug(projectid){
        this.props.history.push(`/adddevbug/${projectid}`);
    }

    updateBug(bugid){
        this.props.history.push(`/updatedevbug/${bugid}`);
    }

    /* deleteBug(bugid){
        BugService.deleteBug(bugid).then(res=>{
            alert(bugid+" deleted")
            this.setState({bugs:this.state.bugs.filter(bug => bug.bugid !== bugid)})
        })
    } */

    render() {
        return (
            <div>
                 <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={"/manager"} className="navbar-brand">
                            <img
                                alt=""
                                src="/images/setting.png"
                                width="35"
                                height="35"
                                className="d-inline-block align-top"
                            />{' '}Bug Tracking System</Link>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        </div>

                        <div className="navbar-right">
                            <Link to={"/"} className="nav-link btn btn-outline-danger">Logout</Link>
                        </div>
                    </nav>
                </header>
                <div className="container bugtable" style={{ fontFamily: 'Raleway' }}>
                    <h2 className='text-center'>Bugs List</h2>
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>Bug Name</th><th>Project Name</th><th>Bug Type</th><th>Status</th><th>Description</th><th>Comments</th><th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.bugs.map(
                                                bug =>
                                                    <tr key={bug.bugid}>
                                                        <td>{bug.bugname}</td>
                                                        {/* <td>{bug.project.projectid}</td> */}
                                                        <td>{bug.project.pname}</td>
                                                        <td>{bug.bugtype}</td>
                                                        <td>{bug.status}</td>
                                                        <td>{bug.bugdesc}</td>
                                                        <td>{bug.comments}</td>
                                                        <td>
                                                        <button className="btn btn-info btn-sm" onClick={() => this.updateBug(bug.bugid)}>Update Bug</button>
                                                        </td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-center"><button className="btn btn-info" onClick={() => this.addBug(this.state.projectid)}>Add Bug</button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectBugs;