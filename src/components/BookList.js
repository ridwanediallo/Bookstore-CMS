import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksData, removeBook } from '../redux/books/bookSlice';
import './BookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  // console.log('I am here', books); // the=is shows the data in the console
  const booksKey = Object.keys(books);

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch]);

  return (
    <div className="booklists">
      <ul className="list-group">
        {booksKey.map((key) => {
          const book = books[key];

          const { category, author, title } = book[0];

          return (
            <li className="list-item" key={key}>
              <p>{title}</p>
              <p>{author}</p>
              <p>{category}</p>
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
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
