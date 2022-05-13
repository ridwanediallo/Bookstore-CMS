import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBooksData,
  removeBook,
} from '../redux/books/bookSlice';
import './BookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  console.log(books); // the=is shows the data in the console
  const booksData = Object.keys(books);


  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch]);

  return (
    <div className="booklists">
      <ul className="list-group">
        {booksData.map((book) => (
          <li className="list-item" key={book.id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <div className="btns">
              <button type="button">Comment</button>|
              <button
                type="button"
                onClick={() => dispatch(removeBook(book.id))}
              >
                Remove
              </button>
              |<button type="button">Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
