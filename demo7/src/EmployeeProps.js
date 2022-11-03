import React from "react";


import "bootstrap/dist/css/bootstrap.css";
import "./Employee.css"



class EmployeeProps extends React.Component{

    state = {buttonClicked: false};

    render(){
        let note = null;
        let achievements = null;
        if(this.props.emp.age < 25){
            note = <span className="text-info">- Fresher</span>
        }
        if(this.state.buttonClicked){
            achievements = <p><i>{this.props.emp.achievements}</i></p>
        }

        return(
            <div className="card" style={{"width": 200}}>
                <img className="card-img-top" src = {this.props.emp.image} height = "200" alt="Card Cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{this.props.emp.empName}</h5>
                    <p className="card-text">
                        <span>Id: {this.props.emp.empId}</span><br />
                        <span>Age: {this.props.emp.age}</span> {note}<br />
                        <span>Salary: {this.props.emp.salary}</span><br />
                    </p>
                    {achievements}
                    <button type="button" className="btn btn-primary">Edit</button>
                    <button className="btn btn-success" onClick={() => {
                            this.setState({ buttonClicked: true})
                    }}>View</button>
                </div>
            </div>
        )
    }
}

export default EmployeeProps;