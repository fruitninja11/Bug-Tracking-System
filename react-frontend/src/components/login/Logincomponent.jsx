import React, { Component } from 'react';
import { Navbar, Card } from 'react-bootstrap';
import Loginservice from '../../services/Loginservice';
import FooterComponent from '../FooterComponent';
class Logincomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            role: ''
        }
        //binding of methods into the component
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.checkEmployee = this.authenticateEmployee.bind(this);
    }


    /* This method after clicking submit button sends the data of email and password in json format
        so in response from the server if the sent value exists in the database then a response status 200 
        is recieved and in the backend we have coded that the post mapping sends a Employee Object in a json form
        as a response*/
    authenticateEmployee = (e) => {
        e.preventDefault();
        let employee = { email: this.state.email, password: this.state.password };
        console.log('employee => ' + JSON.stringify(employee));
        Loginservice.authenticateUser(employee).then(response => {
            //console.log("response recieved: ",JSON.stringify(res));
            console.log(response.data.role);
            if (response.data.role === "PROJECT MANAGER") {
                this.props.history.push('/employeelist');
            }
            else if (response.data.role === "DEVELOPER") {
                this.props.history.push(`/developerlogin/${response.data.empid}`)
            }
            else if (response.data.role === "TESTER") {
                this.props.history.push(`/developerlogin/${response.data.empid}`)
            }
            else 
            alert("Invalid Username/Password");

        })
    }

    /* captures the event and sets the email value which was empty 
    at instantiation i.e extraction of value from emai input field */

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="/images/setting.png"
                                width="35"
                                height="35"
                                className="d-inline-block align-top"
                            />{' '}
                            Bug Tracking System
                        </Navbar.Brand>
                    </Navbar>
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 offset-1" style={{ marginTop: "50px" }}>
                            <h3 style={{ marginTop: "50px" }}>Welcome to Bug Tracking System</h3>
                            <p className="font-weight-light">Please login and get started!</p>
                            <img alt="" src="/images/login.jpg" width="550" />
                        </div>
                        <div className="card col-md-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "100px" }}>
                            <Card.Body>
                                <Card.Title className="text-center"><img alt="" src="/images/worker.png" width="130" height="130" /></Card.Title>
                                <form>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" required value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <div className="text-center" style={{ marginTop: "30px" }}>
                                        <button type="submit" className="btn btn-primary" onClick={this.authenticateEmployee}>Submit</button>
                                    </div>
                                </form>
                            </Card.Body>
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
        );
    }
}

export default Logincomponent;
