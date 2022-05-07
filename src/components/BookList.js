import React from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../store/bookSlice';
import './BookList.css';

const BookList = () => {
  const books = useSelector(selectBooks);

  return (
    <ul className="list-group">
      {books.map((book) => (
        <li className="list-item" key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <div className="btns">
            <button type="button">Comment</button>|
            <button type="button">Remove</button>|
            <button type="button">Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
