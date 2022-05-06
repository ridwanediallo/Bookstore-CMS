import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/bookSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

 const dispatch = useDispatch();

 const addBookHandler = (e) => {
   e.preventDefault();
   dispatch(addBook({title, author}))
 }

  return (
    <section>
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" placeholder="Enter your Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Enter your Author" value={author} onChange={e => setAuthor(e.target.value)} />
        <button type="submit" onClick={addBookHandler}>Submit Book</button>
      </form>
    </section>
  );
};
export default AddBook;
