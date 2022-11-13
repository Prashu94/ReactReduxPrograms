import React from "react";
import { Navigate } from "react-router-dom";

class Employee extends React.Component{
    state = {
        achievements: null,
        edit: null
    }

    handleEdit = () => {
        this.setState({edit: true});
    }

    handleView = () => {
        this.setState({achievements: this.props.emp.achievements});
    }

    render = () => {
        const {emp} = this.props;

        if(this.state.edit){
            return <Navigate to = {"/edit/"+emp.empId} push></Navigate>
        }

        return(
            <div className="card" style = {{'width': 200}}>
                <img className="card-img-top" src = {emp.image} height = "200" alt = "Card Top"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{emp.empName}</h5>
                    <p className="card-text">
                        <span>ID: {emp.empId}</span><br/>
                        <span>Age: {emp.age}</span>{
                            emp.age < 25 && <span className="text-info">- Fresher</span>
                        }<br/>
                        <span>Salary: {emp.salary}</span><br/>
                    </p>
                    <p><i>{this.state.achievements}</i></p>
                    <button type = "button" className="btn btn-primary" onClick={this.handleEdit}>
                        Edit
                    </button>
                    <button className ="btn btn-success" onClick = {this.handleView}>View</button>
                </div>
            </div>
        );
    }
}

export default Employee;