import React from 'react';
import './BookItem.css'

const BookItem = () => {
  return (
    <li className="list-item" key={id}>
      <p>{title}</p>
      <p>{author}</p>
      <div className="btns">
        <button type="button">Comment</button>|
        <button type="button" onClick={() => dispatch(removeBook(id))}>
          Remove
        </button>
        |<button type="button">Edit</button>
      </div>
    </li>
  );
}

export default BookItem
