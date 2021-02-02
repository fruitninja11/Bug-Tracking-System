import React, { Component } from 'react';
import Projectservice from '../../../services/Projectservice';
import FooterComponent from '../../FooterComponent';
import HeaderComponent from '../../HeaderComponent';

class EmployeeProjectList extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees:[]
        }

        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount(){
        Projectservice.allotedProjects().then(res=>{
            this.setState({employees:res.data});
            console.log(res.data);
        })
    }

    deleteEmployee(empid){
        Projectservice.deleteAssignedProject(empid).then(res=>{
            alert("Assigned Project Deleted");
            this.setState({employees:this.state.employees.filter(employee => employee.empid !== empid)})
        })

    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="container">
                    <h2 className='text-center'>Alloted Projects</h2>
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>Employee Id</th><th>Employee Name</th><th>Project Id</th><th>Project Name</th><th>Project Type</th><th>Start Date</th><th>Due Date</th><th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.employees.map(
                                                employee =>
                                                    <tr key={employee.empid}>
                                                        <td>{employee.empid}</td>
                                                        <td>{employee.ename}</td>
                                                        <td>{employee.project.projectid}</td>
                                                        <td>{employee.project.pname}</td>
                                                        <td>{employee.project.ptype}</td>
                                                        <td>{employee.startdate}</td>
                                                        <td>{employee.finishdate}</td>
                                                        <td>
                                                            <button style={{ marginLeft: "15px" }} className="btn btn-danger btn-sm" onClick={() => this.deleteEmployee(employee.empid)}>Delete</button>
                                                        </td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        );
    }
}

export default EmployeeProjectList;