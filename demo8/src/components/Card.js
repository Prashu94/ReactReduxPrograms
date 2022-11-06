import React from "react";
import Employee from "./Employee";

import image1 from '../Jack.png'
import image2 from '../Jill.png'

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
    empName: "Jane",
    age: 24,
    salary: 40000,
    image: image2,
    achievements: "No major achievements so far"
}

export default class Card extends React.Component{
    empArr = [emp1, emp2];
    render = () => {
        return(
            <div>
                <h3 className="text-center text-primary">Employee Details</h3>
                <div className="row">
                    {this.empArr.map(emp => (<Employee key = {emp.empId} emp = {emp}/>))}
                </div>
            </div>
        );
    }
}