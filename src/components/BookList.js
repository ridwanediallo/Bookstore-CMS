import React from 'react'

const BookList = ({books}) => {
  console.log(books)
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
            {book.title} {book.author}
        </li>
      ))}
    </ul>
  );
}

export default BookList
