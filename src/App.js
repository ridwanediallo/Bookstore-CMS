import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Books from './components/Books';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import { fetchBookData, selectBooks, sendBookData } from './redux/books/bookSlice';

function App() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  useEffect(() => {
    dispatch(fetchBookData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sendBookData(books));
  }, [books, dispatch]);

  return (
    <>
      <NavBar />
      <main className="parent">
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
