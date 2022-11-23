import React from "react"
import Employee from "./Employee";
import axios from "axios";

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result: "",
            errorMessage: ""
        };
    }

    componentDidMount = () => {
        this.fetchEmployees();
    }

    fetchEmployees = () => {
        axios.get("http://localhost:2000/retreiveEmployeelist")
        .then(response => {
            this.setState({
                result: response.data,
                errorMessage: ""
            });
            console.log(this.state.result);
        })
        .catch(error => {
            if(error.response){
                this.setState({
                    result: "",
                    errorMessage: error.response.data.message
                });
            }else{
                this.setState({errorMessage: error.message, result: ""})
            }
        })
    }

    render = () => {
        return (
            <div>
                <h3 className="text-center text-primary">Employee Details</h3>
                {this.state.result
                ? this.state.result.map(emp => <Employee key = {emp.empId} emp = {emp}/>):
                null}
                {this.state.errorMessage ? (<h4 className="text-danger">{this.state.errorMessage}</h4>): null}
            </div>
        )
    }
}

export default Card;