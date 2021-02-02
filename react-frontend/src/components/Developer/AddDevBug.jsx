import React, { Component } from 'react';
import BugService from '../../services/BugService';
import { Link } from 'react-router-dom';

class AddDevBug extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bugname: '',
            projectid: this.props.match.params.projectid,
            bugtype: '',
            status: '',
            bugdesc: '',
            comments: ''
        }

        this.changeBugname = this.changeBugname.bind(this);
        this.changeProjectid = this.changeProjectid.bind(this);
        this.changeBugtype = this.changeBugtype.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeDesc = this.changeDesc.bind(this);
        this.changeComments = this.changeComments.bind(this);
    }
    changeBugname = (event) => {
        this.setState({ bugname: event.target.value });
    }

    changeProjectid = (event) => {
        this.setState({ projectid: event.target.value });
    }

    changeBugtype = (event) => {
        this.setState({ bugtype: event.target.value });
    }

    changeStatus = (event) => {
        this.setState({ status: event.target.value });
    }

    changeDesc = (event) => {
        this.setState({ bugdesc: event.target.value });
    }

    changeComments = (event) => {
        this.setState({ comments: event.target.value });
    }

    saveBug = (b) => {
        b.preventDefault();
        let bug = { project: { projectid: this.state.projectid }, bugname: this.state.bugname, bugtype: this.state.bugtype, status: this.state.status, bugdesc: this.state.bugdesc, comments: this.state.comments };
        console.log("bug =>" + JSON.stringify(bug));
        BugService.saveBug(bug).then(res => {
            console.log(res);
            this.props.history.push(`/projectbugs/${this.state.projectid}`);
        })
    }
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
                <div className="container" style={{ fontFamily: 'Raleway' }}>
                    <div className="card col-md-6 col-md-6 offset-md-3 offset-md-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "50px" }}>
                        <div className="card-body">
                            <h5 className="card-title"><center>Add New Bug</center></h5>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label> </label>
                                        <input type="text" className="form-control" placeholder="Enter Project Id" value={this.state.projectid} onChange={this.changeProjectid} disabled />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label> </label>
                                        <input type="text" className="form-control" placeholder="Enter Bug Name" value={this.state.bugname} onChange={this.changeBugname} required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>  </label>
                                        <select id="inputState" className="form-control" value={this.state.bugtype} onChange={this.changeBugtype} required>
                                            <option defaultValue>Choose Bug Type</option>
                                            <option>Functional</option>
                                            <option>Performance</option>
                                            <option>Usability</option>
                                            <option>Compatibility</option>
                                            <option>Security</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label> </label>
                                        <select id="inputState" className="form-control" value={this.state.status} onChange={this.changeStatus} required>
                                            <option defaultValue>Choose Bug Status</option>
                                            <option>Assigned</option>
                                            <option>Open</option>
                                            <option>Fixed</option>
                                            <option>Pending Retest</option>
                                            <option>Retest</option>
                                            <option>Closed</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label> </label>
                                        <input type="text" className="form-control" placeholder="Enter Comments" value={this.state.comments} onChange={this.changeComments} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label> </label>
                                    <textarea className="form-control" placeholder="Enter Project Description" value={this.state.bugdesc} onChange={this.changeDesc} />
                                </div>
                            </form>
                            <div className="text-center">
                                <button type="submit" className="btn btn-success" onClick={this.saveBug}>Add Bug</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddDevBug;