import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {NavDropdown} from'react-bootstrap';

class HeaderComponent extends Component {
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
                            <ul className="navbar-nav ">
                                <Link to={"/employeelist"} className="nav-link">Employees</Link>
                            </ul>
                            <ul className="navbar-nav">
                                <NavDropdown title="Projects" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/projects">Projects List</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/employeeproject">Alloted Projects</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/assigndeveloper">Assign a Developer</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/assigntester">Assign a Tester</NavDropdown.Item>
                                </NavDropdown>
                            </ul>
                            <ul className="navbar-nav">
                            <NavDropdown title="Bugs" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/bugslist">Bugs List</NavDropdown.Item>
                                </NavDropdown>
                            </ul>
                        </div>
                        
                        <div className="navbar-right">
                            <Link to={"/"} className="nav-link btn btn-outline-danger">Logout</Link>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;