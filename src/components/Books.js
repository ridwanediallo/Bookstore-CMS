import { useState } from 'react';
import './Books.css';

import AddBook from './AddBook';
import BookList from './BookList';

const Books = () => {
  const [booksList, setBooksList] = useState([]);

  const addBookHandler = (title, author) => {
    setBooksList((prevBookList) => [
      ...prevBookList,
      { id: Math.random().toString(), title, author },
    ]);
  };
  return (
    <>
      <BookList books={booksList} />
      <AddBook addBook={addBookHandler} />
    </>
  );
};

export default Books;
