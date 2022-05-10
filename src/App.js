import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Books from './components/Books';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import { selectBooks } from './redux/books/bookSlice';

function App() {
  const books = useSelector(selectBooks);

  useEffect(() => {
    fetch(
      'https://react-http-project-35727-default-rtdb.firebaseio.com/books.json',
      {
        method: 'PUT',
        body: JSON.stringify(books),
      }
    );
  }, [books]);

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
