import React from "react";
import image1 from './Jack.png';
import image2 from './Jill.png';

import "bootstrap/dist/css/bootstrap.css";
import "./Employee.css"

import Counter from './Counter';
const emp1 = {
    empId: 100,
    empName: "Jack",
    age: 30,
    salary: 50000,
    image: image1
}

const emp2 = {
    empId: 101,
    empName: "Jill",
    age: 24,
    salary: 40000,
    image: image2
}

class Employee extends React.Component{
    empArr = [emp1, emp2];

    // create the card element and return the same.
    createCard(emp) {
        var note = null;
        if (emp.age < 25) {
          note = <span className="text-info"> - Fresher</span>
        }
        return (
          <div key={emp.empId} className="card" style={{ "width": 200 }}>
            <img className="card-img-top" src={emp.image} height="200" alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title text-center">{emp.empName}</h5>
              <p className="card-text">
                <span>Id: {emp.empId}</span><br />
                <span>Age: {emp.age}</span> {note}<br />
                <span>Salary: {emp.salary}</span><br />
              </p>
              <button type="button" className="btn btn-primary">Edit Details</button>
            </div>
          </div>
        )
    }

    // render method to return the JSX to be rendered
    render(){
        return(
            <div>
                <h3 className="text-center text-primary">Employee Details</h3>
                <div className="row">
                    {this.empArr.map(emp => this.createCard(emp))}
                </div>
                <div className="row">
                  <Counter/>
                </div>
            </div>
        );
    }
}

export default Employee;