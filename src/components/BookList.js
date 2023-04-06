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
      <div>
        {booksKey.map((key) => {
          const book = books[key];

          const { category, author, title } = book[0];

          return (
            <div
              className="d-flex flex-wrap justify-content-lg-between border rounded mb-4 p-4"
              key={key}
            >
              <div className="left">
                <div className="">
                  <p className="book-category">{category}</p>
                  <h3 className="book-title">{title}</h3>
                  <p className="book-author">{author}</p>
                </div>
                <div className="btns me-4">
                  <button className="book-btn" type="button">
                    Comment
                  </button>
                  |
                  <button
                    className="book-btn"
                    type="button"
                    onClick={() => dispatch(deleteBook(key))}
                  >
                    Remove
                  </button>
                  |
                  <button className="book-btn" type="button">
                    Edit
                  </button>
                </div>
              </div>
              <div className="d-flex flex-wrap progress-container">
                <div>
                  <div className="circular-progress-container">
                    <div className="circular-progress"></div>
                  </div>
                  <div className="progress-stat">
                    <p className="percent-complete">0%</p>
                    <p className="completed">Completed</p>
                  </div>
                </div>
                <div className="progress-divider"></div>
                <div className="current-chapter-container">
                  <div>
                    <p className="current-chapter-label">CURRENT CHAPTER</p>
                    <p className="current-chapter">Introduction</p>
                  </div>
                  <div>
                    <button className="progress-btn" type="button">
                      UPDATE PROGRESS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
