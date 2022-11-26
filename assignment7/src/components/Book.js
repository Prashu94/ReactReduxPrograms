import React from "react";

class Book extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            summary: null,
            view: null
        }
    }

    view = () => {
        this.setState({view: true})
        console.log(this.state.view);
    }

    render = () =>{
        const {book} = this.props;


        return(
            <div className="card" style = {{width: 200, height: 300}}>
                <div className="card-body">
                    <h5 className="text-center">{book.title}</h5>
                    <p className="card-text">
                        <span>Author: {book.author}</span><br/>
                        <span>Genre: {book.genre}</span>
                    </p>
                    <p>
                        <i>{this.state.summary}</i>
                    </p>
                </div>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.setState({summary: book.summary})
                    }}>
                    Summary
                </button>
            </div>
        );
    }
}

export default Book;