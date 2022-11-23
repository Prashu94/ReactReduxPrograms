import React from "react";
import {Navigate} from "react-router-dom";

class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            achievements: null,
            edit: null
        }
    }

    edit = () => {
        this.setState({edit: true})
        console.log(this.state.edit);
    }


    render = () =>{
        const {emp} = this.props
        var note = null;
        var redirect = null;

        if(emp.age < 25){
            note = <span className="text-info"> - Fresher</span>
        }

        if(this.state.edit){
            redirect = <Navigate to = {"/edit/" + emp.empId} push></Navigate>
        }

        return(
            <div className="card" style = {{width: 200}}>
                <img
                    className="card-img-top"
                    src = {require(`../assets/${emp.image}`)}
                    height = "200"
                    alt = "profile pic"
                />
                <div className="card-body">
                    <h5 className="card-title text-center">{emp.empName}</h5>
                    <p className="card-text">
                        <span>Id: {emp.empId}</span><br/>
                        <span>Age: {emp.age}</span> {note} <br/>
                        <span>Salary: {emp.salary}</span><br/>
                        <br/>
                    </p>
                    <p>
                        <i>{this.state.achievements}</i>
                    </p>
                </div>
                <button type = "button" className="btn btn-primary" onClick={this.edit}>
                    Edit
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => {
                        this.setState({achievements: emp.achievements})
                    }}>
                    View
                </button>
                {redirect}
            </div>
        )
    }
}

export default Employee;