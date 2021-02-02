import React, { Component } from 'react';
import BugService from '../../../services/BugService';
import FooterComponent from '../../FooterComponent';
import HeaderComponent from '../../HeaderComponent';

class BugsList extends Component {
    constructor(props){
        super(props)

        this.state={
            bugs:[]
        }
        this.addBug = this.addBug.bind(this);
        this.updateBug = this.updateBug.bind(this);
        this.deleteBug = this.deleteBug.bind(this);
    }

    componentDidMount(){
        BugService.getAllBugs().then(res=>{
            this.setState({bugs:res.data});
            console.log(res.data);
        })
    }

    addBug(){
        this.props.history.push('/addbug');
    }

    updateBug(bugid){
        this.props.history.push(`/updatebug/${bugid}`);
    }

    deleteBug(bugid){
        BugService.deleteBug(bugid).then(res=>{
            alert(bugid+" deleted")
            this.setState({bugs:this.state.bugs.filter(bug => bug.bugid !== bugid)})
        })
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="container bugtable">
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
                                                        <button className="btn btn-info btn-sm" onClick={() => this.updateBug(bug.bugid)}>Update</button>
                                                            <button style={{ marginLeft: "15px" }} className="btn btn-danger btn-sm" onClick={() => this.deleteBug(bug.bugid)}>Delete</button>
                                                        </td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-center"><button className="btn btn-info" onClick={() => this.addBug()}>Add Bug</button></div>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        );
    }
}

export default BugsList;