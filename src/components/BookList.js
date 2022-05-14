import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksData, deleteBook } from '../redux/books/bookSlice';
import './BookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const booksKey = Object.keys(books);

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch]);

  return (
    <div className="container booklists">
      <ul className="list-group">
        {booksKey.map((key) => {
          const book = books[key];

          const { category, author, title } = book[0];

          return (
            <li className="list-item" key={key}>
              <p>{category}</p>
              <h3>{title}</h3>
              <p>{author}</p>
              <div className="btns">
                <button type="button">Comment</button>|
                <button type="button" onClick={() => dispatch(deleteBook(key))}>
                  Remove
                </button>
                |<button type="button">Edit</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
