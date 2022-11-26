import React, { Component } from "react";
import axios from "axios";
import Book from "./Book";
class ViewAllBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      errorMessage: "",
    };
  }

  componentDidMount = () => {
    this.fetchBooks();
  }

  fetchBooks = () => {
    axios
      .get("http://localhost:4000/books")
      .then((response) => {
        this.setState({
          result: response.data,
          errorMessage: "",
        });
        console.log(this.state.result);
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            result: "",
            errorMessage: error.response.data.message,
          });
        } else {
          this.setState({
            errorMessage: error.message,
            result: "",
          });
        }
      });
  };
  render() {
    return (
      <div>
        <h3 className="text-center text-primary">Book Catalog</h3>
        {this.state.result
          ? this.state.result.map((book) => (
              <Book key={book.id} book={book} />
            ))
          : null}
        {this.state.errorMessage ? (
          <h4 className="text-danger">{this.state.errorMessage}</h4>
        ) : null}
      </div>
    );
  }
}

export default ViewAllBooks;
