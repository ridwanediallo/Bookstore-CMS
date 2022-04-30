import { useState } from 'react';

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
    <div>
      <AddBook addBook={addBookHandler} />
      <BookList books={booksList} />
    </div>
  );
};

export default Books;
