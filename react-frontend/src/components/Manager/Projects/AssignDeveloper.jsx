import React, { Component } from 'react';
import Employeeservice from '../../../services/Employeeservice';
import Projectservice from '../../../services/Projectservice';
import FooterComponent from '../../FooterComponent';
import HeaderComponent from '../../HeaderComponent';



class AssignDeveloper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            start_date: '',
            end_date: '',
            projects: [],
            empid: '',
            pname: '',
            projectid: '',
            empname: '',
            employee: [],
        }
        this.changeId = this.changeEId.bind(this);
        this.changeName = this.changePId.bind(this);
        this.changeEmpName = this.changeEmpName.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.assignDeveloper = this.assignDeveloper.bind(this);
    }
    componentDidMount() {
        /* If you need to load data from a remote endpoint here java, 
        this is a good place to instantiate the network request.
        componentDidMount() is invoked immediately after a component is mounted */
        Projectservice.getAllProjects().then((res) => {
            this.setState({ projects: res.data });
            console.log(res.data);
        });

        Employeeservice.getAllEmployees().then(res => {
            this.setState({ employee: res.data });
            console.log(res.data);
        })
    }

    assignDeveloper = (p) => {
        p.preventDefault();
        let empproject = { empid: this.state.empid, ename: this.state.empname, startdate: this.state.start_date, finishdate: this.state.end_date, project: { projectid: this.state.projectid } };
        console.log("empproject =>" + JSON.stringify(empproject));
        Projectservice.assignProject(empproject).then(res => {
            console.log(res);
            this.props.history.push('/employeeproject');
        })
    }


    changeEId = (event) => {

        this.setState({ empid: event.target.value });
        console.log(event.target.value);
        Employeeservice.findByEmployeeId(event.target.value).then(res => {
            console.log(res.data);
            this.setState({ empname: res.data.firstName + " " + res.data.lastName });
        })
    }

    changePId = (event) => {
        this.setState({ projectid: event.target.value });
        console.log(event.target.value);
        Projectservice.getProjectById(event.target.value).then(res=>{
            this.setState({ pname: res.data.pname });
        })
    }

    changeName = (event) => {
        this.setState({ pname: event.target.value });

    }

    changeEmpName = (event) => {
        this.setState({ empname: event.target.value });
    }

    handleChangeStart(event) {
        this.setState({
            start_date: event.target.value
        });
    }

    handleChangeEnd(event) {
        this.setState({
            end_date: event.target.value
        });
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="card col-md-6 offset-md-3 offset-md-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "50px" }}>
                    <div className="card-body">
                        <h4 className="card-title" style={{ marginBottom: "40px" }}>Assign a Developer</h4>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label> Enter Employee ID </label>
                                    {/*  <input type="text" className="form-control" placeholder="Enter ID" value={this.state.empid} onChange={this.changeEId} required /> */}
                                    <select id="inputState" className="form-control" value={this.state.empid} onChange={this.changeEId}>
                                        <option defaultValue> Choose the Employee Id </option>
                                        {
                                            this.state.employee.map(
                                                employee =>
                                                    <option key={employee.empid}> {employee.empid} </option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label> Enter Employee Name </label>
                                    <input type="text" className="form-control" placeholder="Enter Name" value={this.state.empname} onChange={this.changeEmpName} required />
                                </div>
                                <div className="form-group col-md-4">
                                    <label> Enter Project ID </label>
                                    {/*  <input type="text" className="form-control" placeholder="Enter Project ID" value={this.state.projectid} onChange={this.changePId} required />*/}    
                                    <select id="inputState" className="form-control" value={this.state.projectid} onChange={this.changePId}>
                                        <option defaultValue> Choose the Project ID</option>
                                        {
                                            this.state.projects.map(
                                                project =>
                                                    <option key={project.projectid}> {project.projectid} </option>
                                            )
                                        }
                                    </select>                            
                                </div>
                            </div>

                            <div className="form-row" style={{ marginBottom: "20px" }}>
                                <label> </label>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label> Enter Project Name </label>
                                    <input type="text" className="form-control"  value={this.state.pname} onChange={this.changeName} required />
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="datelabel"> Enter Start Date </label>
                                    <div className="form-row">
                                        <input id="dateinput" type="date" onChange={this.handleChangeStart} name="begin"
                                            placeholder="dd-mm-yyyy" value={this.state.startDate}
                                            min="1997-01-01" max="2030-12-31">
                                        </input>
                                    </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="datelabel"> Enter End Date </label>
                                    <div className='form-row'>
                                        <input id="dateinput" type="date" onChange={this.handleChangeEnd} name="begin"
                                            placeholder="dd-mm-yyyy" value={this.state.endDate}
                                            min="1997-01-01" max="2030-12-31">
                                        </input>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="text-center" style={{ marginTop: "20px" }}>
                            <button type="submit" className="btn btn-success" onClick={this.assignDeveloper}>Assign</button>
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
        );
    }
}

export default AssignDeveloper;