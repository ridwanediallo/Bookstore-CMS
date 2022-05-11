import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import './AddBook.css';

import { bookAdded } from '../redux/books/bookSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onAuthorChange = (e) => setAuthor(e.target.value);

  const onSaveBookClick = () => {
    if (title && author) {
      dispatch(bookAdded({ id: nanoid(), title, author }));
    }
    setTitle('');
    setAuthor('');
  };

  const addBookHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="container">
      <form onSubmit={addBookHandler} className="container d-flex ">
        <h1 className="form-title">ADD NEW BOOK</h1>
        <div className="row align-self-start inputs">
          <input
            className="col-12 col-sm-4"
            type="text"
            placeholder="Enter your Title"
            value={title}
            onChange={onTitleChange}
          />
          <input
            className="col-12 col-sm-3"
            type="text"
            placeholder="Enter your Author"
            value={author}
            onChange={onAuthorChange}
          />
          <select className="col-12 col-sm-3">
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <button
            className="col-12 col-sm-2 align-self-end"
            type="submit"
            onClick={onSaveBookClick}
          >
            Submit Book
          </button>
        </div>
      </form>
    </section>
  );
};
export default AddBook;
