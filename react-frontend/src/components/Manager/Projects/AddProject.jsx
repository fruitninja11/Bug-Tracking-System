import React, { Component } from 'react';
import Projectservice from '../../../services/Projectservice';
import FooterComponent from '../../FooterComponent';
import HeaderComponent from '../../HeaderComponent';

class AddProject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pname: '',
            ptype: '',
            technology: '',
            client: '',
            pdesc: ''
        }

        this.changePname=this.changePname.bind(this);
        this.changeType=this.changeType.bind(this);
        this.changeTech=this.changeTech.bind(this);
        this.changeClient=this.changeClient.bind(this);
        this.changeDesc=this.changeDesc.bind(this);
    }
    
    changePname=(event)=>{
        this.setState({ pname: event.target.value });
    }

    changeType=(event)=>{
        this.setState({ ptype: event.target.value });
    }

    changeTech=(event)=>{
        this.setState({ technology: event.target.value });
    }

    changeClient=(event)=>{
        this.setState({ client: event.target.value });
    }

    changeDesc=(event)=>{
        this.setState({ pdesc: event.target.value });
    }
    saveProject= (p) =>{
        p.preventDefault();
        let project ={pname:this.state.pname,ptype:this.state.ptype,technology:this.state.technology,client:this.state.client,pdesc:this.state.pdesc};
        console.log("project =>" + JSON.stringify(project));
        Projectservice.createProject(project).then(res =>{
            console.log(res);
            this.props.history.push('/projects');
        });
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="card col-md-6 offset-md-3 offset-md-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "50px" }}>
                    <div className="card-body">
                        <h5 className="card-title"><center>Add Project</center></h5>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label> </label>
                                    <input type="text" className="form-control" placeholder="Enter Project Name" value={this.state.pname} onChange={this.changePname} required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>  </label>
                                    <select id="inputState" className="form-control" value={this.state.ptype} onChange={this.changeType}>
                                        <option defaultValue>Choose Project Type</option>
                                        <option>Management</option>
                                        <option>Production</option>
                                        <option>Security</option>
                                        <option>Banking </option>
                                        <option>Testing</option>
                                        <option>Software Upgradation</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label> </label>
                                    <select id="inputState" className="form-control" value={this.state.technology} onChange={this.changeTech}>
                                        <option defaultValue>Choose Project Technology</option>
                                        <option>Java EE</option>
                                        <option>ASP dotNet</option>
                                        <option>C++</option>
                                        <option>MEAN Stack</option>
                                        <option>MERN STACK </option>
                                        <option>Python</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label> </label>
                                    <input type="text" className="form-control" placeholder="Enter Client" value={this.state.client} onChange={this.changeClient} required/>
                                </div>
                            </div>
                                <div className="form-group">
                                    <label> </label>
                                    <textarea className="form-control" placeholder="Enter Project Description" value={this.state.pdesc} onChange={this.changeDesc}/>
                                </div>                                                           
                        </form>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success" onClick={this.saveProject}>Add Project</button>
                        </div> 
                    </div>
                </div>
                <FooterComponent />
            </div>
        );
    }
}

export default AddProject;