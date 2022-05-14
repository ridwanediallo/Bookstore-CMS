import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import './AddBook.css';

import { addBooks } from '../redux/books/bookSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onAuthorChange = (e) => setAuthor(e.target.value);
  const onCategoryChange = (e) => setCategory(e.target.value);

  const onSaveBookClick = () => {
    if (title && author && category) {
      dispatch(addBooks({ id: nanoid(), title, author, category }));
    }
    setTitle('');
    setAuthor('');
  };

  const addBookHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="container form-section">
      <h1 className="form-title">ADD NEW BOOK</h1>
      <form onSubmit={addBookHandler} className="">
          <input
            className=""
            type="text"
            placeholder="Enter your Title"
            value={title}
            onChange={onTitleChange}
          />
          <input
            className=""
            type="text"
            placeholder="Enter your Author"
            value={author}
            onChange={onAuthorChange}
          />
          <select
            onChange={onCategoryChange}
            value={category}
            className=""
          >
            <option value="action">Action</option>
            <option value="it">IT</option>
            <option value="fiction">Fiction</option>
            <option value="leadership">Leadership</option>
          </select>
          <button
            type="submit"
            onClick={onSaveBookClick}
            className=""
          >
            Submit Book
          </button>
      </form>
    </section>
  );
};
export default AddBook;
