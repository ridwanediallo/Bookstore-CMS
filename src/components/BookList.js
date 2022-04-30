import React from 'react';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'go',
      author: 'out',
    },
    {
      id: 2,
      title: 'go',
      author: 'out',
    },
    {
      id: 3,
      title: 'go',
      author: 'out',
    },
  ];
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title}
          {' '}
          {book.author}
        </li>
      ))}
    </ul>
  );
};

export default BookList;
