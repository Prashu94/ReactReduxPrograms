import axios from "axios";
import React, { Component } from "react";

// Complete this class
class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      genre: "",
      summary: "",
      formErrorMessage: {
        title: "Title must at least be 4 characters long",
        author: "Author must at least be 3 characters long",
        genre: "Please Select a Genre",
      },
      formValidity: {
        title: false,
        author: false,
        genre: false,
        buttonActive: false,
      },
      successMessage:""
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    if (this.state.formValidity.buttonActive) {
      let formJSON = {
        title: this.state.title,
        author: this.state.author,
        genre: this.state.genre,
        summary: this.state.summary
      };
      console.log(JSON.stringify(formJSON));
      this.addBooks();
    }
  };

  validateField = (e) => {
    const { name, value } = e.target;
    let formErrorMessage = this.state.formErrorMessage;
    let formValidity = this.state.formValidity;

    if (name === "title") {
      this.setState({ title: value });
      if (value.length < 4) {
        formErrorMessage.title = "Title must at least be 4 characters long";
        formValidity.title = false;
      } else {
        formErrorMessage.title = "";
        formValidity.title = true;
      }
      this.setState({ formErrorMessage });
      this.setState({ formValidity });
    }

    if (name === "author") {
      this.setState({ author: value });
      if (value.length < 3) {
        formErrorMessage.author = "Author must at least be 3 characters long";
        formValidity.author = false;
      } else {
        formErrorMessage.author = "";
        formValidity.author = true;
      }
      this.setState({ formErrorMessage });
      this.setState({ formValidity });
    }

    if (name === "genre") {
      if (value === "") {
        formErrorMessage.genre = "Please Select a Genre";
        formValidity.genre = false;
      } else {
        formErrorMessage.genre = "";
        formValidity.genre = true;
      }
      this.setState({ genre: value });
      this.setState({ formErrorMessage });
      this.setState({ formValidity });
    }

    if (name === "summary") {
      this.setState({ summary: value });
    }

    if (formValidity.title && formValidity.author && formValidity.genre) {
      formValidity.buttonActive = true;
    } else {
      formValidity.buttonActive = false;
    }
  };

  addBooks = (event) => {
    
    let formJSON = {
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
      summary: this.state.summary,
    };
    axios
    .post("http://localhost:4000/books", formJSON)
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
    //event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-5 offset-4">
            <form
              style={{
                border: "1px solid ",
                padding: "15px",
                borderRadius: "8px",
                borderColor: "gray",
              }}
            >
              <h2 className="text-center">Add A Book</h2>
              <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={this.validateField}
                  value={this.state.title}
                />
                <br />
                {this.state.formErrorMessage.title ? (
                  <span className="text-danger">
                    {this.state.formErrorMessage.title}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <label htmlFor="author">Author: </label>
                <input
                  type="text"
                  name="author"
                  className="form-control"
                  onChange={this.validateField}
                  value={this.state.author}
                />
                <br />
                {this.state.formErrorMessage.author ? (
                  <span className="text-danger">
                    {this.state.formErrorMessage.author}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <label>Genre: </label>
                <select
                  className="form-control"
                  onChange={this.validateField}
                  value={this.state.genre}
                  name="genre"
                >
                  <option value="">---Select Option</option>
                  <option value="thriller">Thriller</option>
                  <option value="mystery">Mystery</option>
                  <option value="drama">Drama</option>
                  <option value="horror">Horror</option>
                </select>
                <br />
                {this.state.formErrorMessage.genre ? (
                  <span className="text-danger">
                    {this.state.formErrorMessage.genre}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <label>Summary: </label>
                <textarea
                  name="summary"
                  onChange={this.validateField}
                  className="form-control"
                  value={this.state.summary}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-success"
                  //onClick={this.handleChange}
                  onClick={this.addBooks}
                  disabled={!this.state.formValidity.buttonActive}
                >
                  Add Book
                </button>
                <br/>
                <span className="text-success">{this.state.successMessage}</span>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AddBook;
