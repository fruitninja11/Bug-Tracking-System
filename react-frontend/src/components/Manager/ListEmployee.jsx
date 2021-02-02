import React, { Component } from 'react';
import Employeeservice from '../../services/Employeeservice';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';

class ListEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        /* If you need to load data from a remote endpoint here java, 
        this is a good place to instantiate the network request.
        componentDidMount() is invoked immediately after a component is mounted */
        Employeeservice.getAllEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="container">
                    <h2 className='text-center' style={{marginBottom:"30px"}}>Employees List</h2>
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>Employee ID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.employees.map(
                                                employee =>
                                                    <tr key={employee.empid}>
                                                        <td>{employee.empid}</td>
                                                        <td>{employee.firstName}</td>
                                                        <td>{employee.lastName}</td>
                                                        <td>{employee.email}</td>
                                                        <td>{employee.role}</td>
                                                        <td>
                                                            {/* <button className="btn btn-info" onClick={() => this.updateEmployee(employee.empid)}>Update</button> */}
                                                            {/*  <button style={{ marginLeft: "15px" }} className="btn btn-info" onClick={() => this.viewEmployee(employee.empid)}>View</button> */}
                                                            {/*  <button style={{ marginLeft: "15px" }} className="btn btn-danger" onClick={() => this.deleteEmployee(employee.empid)}>Delete</button>*/}
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
                <FooterComponent />
            </div>
        );
    }
}

export default ListEmployee;