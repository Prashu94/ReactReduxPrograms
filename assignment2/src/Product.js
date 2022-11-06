import React, { Component } from 'react'
import './Product.css';
import "bootstrap/dist/css/bootstrap.css";
class Product extends Component {

     book1 ={
        title : "Angels and Demons",
        publisher : "Penguin Random House",
        author : "Dan Brown",
        price : 409,
        prodId : 2012,
    }
    
     book2 ={
        title : "Norse Mythology",
        publisher : "Bloomsbury Publishing",
        author : "Neil Gaiman",
        price : 300,
        prodId : 2019,
    }

     createCard = (book) => {
        let note = null;
        if(book.price < 400){
          note = <span className='text-info'>- Bestseller</span>
        }
        return(
        <div className = "card" style = {{'width': 300, 'height': 200}} key = {book.prodId}>
          <div className = "card-body">
            <h5 className = "card-title text-center">{book.title}</h5>
            <p className="card-text">
              <span>Author: {book.author}</span><br/>
              <span>Publisher: {book.publisher}</span><br/>
              <span>Price: {book.price} {note}</span><br/><br/>
              <span>Product ID: {book.prodId}</span><br/>
            </p>
          </div>
        </div>);
      }

    getBookDetails = () => {
        const bookArr = [this.book1, this.book2];
        const element = (
          <div>
                <h3 className="text-center text-primary">Featured Titles</h3>
                <div className="conntainer-fluid">
                    <div className="row"  >
                      {
                        bookArr.map((book) => {
                          return this.createCard(book);
                        })
                      }
                    </div>
                </div>        
          </div>
        )
        return element;
      }

  render() {
        return (
            <React.Fragment>
              {
                this.getBookDetails()
              }
            </React.Fragment>
        );
    }
}

export default Product;