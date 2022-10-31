import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import"./index.css";

// Book data
const book1 ={
    title : "Angels and Demons",
    publisher : "Penguin Random House",
    author : "Dan Brown",
    price : 409,
    prodId : 2012,
}

// Book data
const book2 ={
    title : "Norse Mythology",
    publisher : "Bloomsbury Publishing",
    author : "Neil Gaiman",
    price : 300,
    prodId : 2019,
}

function createCard(book, index) {
  // Implement a Single Card creation
  var price = (book.price < 400) ? <span className='text-success'> - Bestseller!</span> : <span></span>;
  return(
    <div className='card' style = {{'width':300, 'height': 200}} key = {index}>
      <div className='card-body'>
        <h5 className='card-title text-center'><b>{book.title}</b></h5>
        <p className='card-text'>
          <span>Author: <b>{book.author}</b></span><br/>
          <span>Publisher: <b>{book.publisher}</b></span><br/>
          <span>Price: <b> {book.price}</b> {price}</span> <br/><br/>
          <span>ProductID: <b>{book.prodId}</b></span>
        </p>
      </div>
    </div>
  );
}

function getBookDetails(){
  const bookArr = [book1, book2];
  // Use bookArr, and CreateCard function here to display cards 
  // based on required logic
  
  return (
    <div>
      <h3 className='text-center text-primary'>Featured Titles</h3>
      <>
      {bookArr.map((book, index) => { return createCard(book, index)})};
      </>
    </div>
  );
}

ReactDOM.render(getBookDetails(), document.getElementById('root'));