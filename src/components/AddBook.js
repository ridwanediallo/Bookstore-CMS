import React, { useState } from 'react';

const AddBook = ({addBook}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

    const addBooksHandler = (event) => {
      event.preventDefault();
      addBook(title, author);

      setTitle('');
      setAuthor('');
    };


  return (
    <>
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={addBooksHandler}>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit Book</button>
      </form>
    </>
  );
};

export default AddBook;
