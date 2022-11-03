import React from "react";

import image1 from './Jack.png';
import image2 from './Jill.png';

import "bootstrap/dist/css/bootstrap.css";
import "./Employee.css"
import Person from "./Person";

const emp1 = {
    empId: 100,
    empName: "Jack",
    age: 30,
    salary: 50000,
    image: image1,
    achievements: "Has got 3 bravo awards and 1 MVP award. Has worked on cutting edge technologies as well"
}

const emp2 = {
    empId: 101,
    empName: "Jill",
    age: 24,
    salary: 40000,
    image: image2,
    achievements: "No major achievements so far"
}

class Employee extends React.Component{
    empArray = [emp1, emp2];

    state = {selectedEmp: null};

    createCard(emp){
        var note = null;
        var achievements = null;
        if(emp.age < 25){
            note = <span className="text-info">- Fresher</span>
        }
        if(this.state.selectedEmp === emp.empId){
            achievements = <p><i>{emp.achievements}</i></p>
        }

        return(
            <div key={emp.empId} className="card" style={{"width": 200}}>
                <img className="card-img-top" src = {emp.image} height = "200" alt="Card Cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{emp.empName}</h5>
                    <p className="card-text">
                        <span>Id: {emp.empId}</span><br />
                        <span>Age: {emp.age}</span> {note}<br />
                        <span>Salary: {emp.salary}</span><br />
                    </p>
                    {achievements}
                    <button type="button" className="btn btn-primary">Edit</button>
                    <button className="btn btn-success" onClick={() => {
                            this.setState({ selectedEmp: emp.empId })
                    }}>View</button>
                </div>
            </div>
        )
    }
    
    render(){
        return(
            <div>
                <h3 className="text-center text-primary">Employee Details</h3>
                <div className="row">
                    {this.empArray.map(emp => { return this.createCard(emp) })}
                </div>
                <div className="row">
                    <Person name = "Jack" fruit="Mango"></Person>
                </div>
            </div>
        )   
    }
}

export default Employee;