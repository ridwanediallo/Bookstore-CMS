import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

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
    <section>
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={addBookHandler}>
        <input
          type="text"
          placeholder="Enter your Title"
          value={title}
          onChange={onTitleChange}
        />
        <input
          type="text"
          placeholder="Enter your Author"
          value={author}
          onChange={onAuthorChange}
        />
        <button type="submit" onClick={onSaveBookClick}>
          Submit Book
        </button>
      </form>
    </section>
  );
};
export default AddBook;
