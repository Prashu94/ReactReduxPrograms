import React from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

function withParams(Component){
  return props => <Component {...props} params = {useParams()}/>
}
class EditEmployee extends React.Component{
  state = {
    empId: '',
    empName: '',
    age: '',
    salary: '',
    achievements: '',
    formErrors: {
      empNameErr: '',
      empAgeErr: ''
    },
    fieldValidity: {
      empName: false,
      age: false
    },
    formValid: false,
    successMessage: ''
  }

  validateName = (e) => {
    const name = e.target.value;
    let formErrors = this.state.formErrors;
    let fieldValidity = this.state.fieldValidity;
    this.setState({empName: e.target.value});
    if(name.length < 6){
      formErrors.empNameErr = "Name must be at least 6 chars";
      fieldValidity.empName = false;
    }else{
      formErrors.empNameErr = '';
      fieldValidity.empName = true;
    }

    this.setState({fieldValidity: fieldValidity});
    this.setState({formValid: fieldValidity.empName && fieldValidity.age});
  }

  validateAge = (e) => {
    const age = e.target.value;
    this.setState({age: age});
    let formErrors = this.state.formErrors;
    let fieldValidity = this.state.fieldValidity;
    if(age < 18 || age > 60){
      formErrors.empAgeErr = "Age must be between 18 and 60";
      fieldValidity.age = false;
    }else{
      formErrors.empAgeErr = "";
      fieldValidity.age = true;
    }
    this.setState({formErrors: formErrors});
    this.setState({formValid: fieldValidity.empName && fieldValidity.age});
  }

  validateSalary = (e) => {
    let salary = e.target.value;
    this.setState({salary: salary});
  }

  validateAchievements = (e) => {
    let achievements = e.target.value;
    this.setState({achievements: achievements});
  }

  /*update = (e) => {
    e.preventDefault();
    if(this.state.formValid){
      let formJSON = {
        empId: this.props.params.id,
        empName: this.state.empName,
        age: this.state.age,
        salary: this.state.salary,
        achievements: this.state.achievements
      }
      console.log(JSON.stringify(formJSON));
      this.setState({successMessage: JSON.stringify(formJSON)});
    }
  }*/

  updateEmployee = () => {
    let formJSON = {
        empId: this.props.params.id,
        empName: this.state.empName,
        age: this.state.age,
        salary: this.state.salary,
        achievements: this.state.achievements,
        image:'Jack.png'
    };
    //console.log(this.props.params.id);
    axios
    .put(`http://localhost:2000/updateEmployeeDetails/${this.props.params.id}`, formJSON)
    .then(response => {
        this.setState({successMessage: response.data.message, error: ""});
        console.log(response.data);
    })
    .catch(error => {
        if(error.response){
            this.setState({error: error.response.data.message, success: ""});    
        }else {
            this.setState({ error: error.message, success: "" });
        }
    });
}


  render(){
      return(
          <div style={{width: 500, margin: '0px auto'}}>
            <h3 className="text-center">The selected ID is {this.props.params.id}</h3>
            <form>
              <div className="form-group">
                <label>Employee Id:</label>
                <input className="form-control" disabled value = {this.props.params.id}/>
              </div>
              <div className="form-group">
                <label>Name: </label>
                <input className="form-control" onChange={this.validateName} value = {this.state.empName}/>
              </div>
              <span className="text-danger">{this.state.formErrors.empNameErr}</span>
              <div className="form-group">
                <label>Age: </label>
                <input className="form-control" onChange={this.validateAge} value = {this.state.age}/>
              </div>
              <span className="text-danger">{this.state.formErrors.empAgeErr}</span>
              <div className="form-group">
                <label>salary:</label>
                <select onChange={this.validateSalary} className="form-control" value = {this.state.salary}>
                  <option value = "20000">20000</option>
                  <option value = "30000">30000</option>
                  <option value = "40000">40000</option>
                  <option value = "50000">50000</option>
                </select>
              </div>
              <div className="form-group">
                <label>Achievements:</label>
                <textarea onChange={this.validateAchievements} className="form-control" value={this.state.achievements} />
              </div>
              <button type = "button" onClick={this.updateEmployee} className="btn btn-success" disabled={!this.state.formValid}>
                Update
              </button><br/>
              <span className="text-success">{this.state.successMessage}</span>
              
            </form>
          </div>
      )
  }
}
export default withParams(EditEmployee);
