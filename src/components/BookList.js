import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, selectBooks } from '../redux/books/bookSlice';
import './BookList.css';

const BookList = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  // const removeBookHandler = (index) => {
  //   dispatch(removeBook(index));
  // };

  return (
    <ul className="list-group">
      {books.map((book) => (
        <li className="list-item" key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <div className="btns">
            <button type="button">Comment</button>|
            <button
              type="button"
              onClick={() => {
                dispatch(removeBook({ id: book.id }));
              }}
            >
              Remove
            </button>
            |<button type="button">Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
