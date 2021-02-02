import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FetchProject from '../../services/FetchProject';
import FooterComponent from '../FooterComponent';

class WelcomeDeveloper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empid: this.props.match.params.empid,
            ename: '',
            projectid: '',
            projectname: '',
            technology: '',
            projdesc: '',
            startdate: '',
            finishdate: ''
        }
        this.viewBugs=this.viewBugs.bind(this);
    }

    componentDidMount() {
        console.log(this.state.empid);
        FetchProject.getProjectForEmployee(this.state.empid).then(response => {
            let employee = response.data;
            console.log(employee);
            this.setState({
                empid: employee.empid,
                ename: employee.ename,
                projectid: employee.project.projectid,
                projectname: employee.project.pname,
                technology: employee.project.technology,
                projdesc: employee.project.pdesc,
                startdate: employee.startdate,
                finishdate: employee.finishdate,
            });

        });
    }

    viewBugs(projectid){
        this.props.history.push(`/projectbugs/${projectid}`);
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={"/"} className="navbar-brand">
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
                <div style={{ fontFamily: 'Raleway' }}>
                    <div className="card col-md-6 offset-md-3 offset-md-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "60px" }}>
                        <h3 className="text-center" style={{ marginTop: "25px", marginBottom: "25px" }}>{this.state.ename} Alloted Project</h3>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <label><b>Employee Id : </b>{this.state.empid}</label>
                                </div>
                                <div className="col">
                                    <label><b>Employee Name : </b>{this.state.ename}</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label><b>Alloted Project Id : </b>{this.state.projectid}</label>
                                </div>
                                <div className="col">
                                    <label><b>Alloted Project Name : </b>{this.state.projectname}</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label><b>Start Date : </b>{this.state.startdate}</label>
                                </div>
                                <div className="col">
                                    <label><b>Due Date : </b>{this.state.finishdate}</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label><b>Technology : </b>{this.state.technology}</label>
                                </div>
                                <div className="col">
                                    <label><b>Project Description : </b>{this.state.projdesc}</label>
                                </div>
                            </div>
                        </div>
                        <div className="text-center" style={{ marginBottom: "30px",marginTop: "25px" }}>
                                <button type="submit" class="btn btn-success" onClick={()=> this.viewBugs(this.state.projectid)}> View Bugs </button>
                        </div>
                    </div>
                </div>


                <FooterComponent />
            </div>
        );
    }
}

export default WelcomeDeveloper;
