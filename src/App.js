import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Books from './components/Books';
import Categories from './components/Categories';
import NavBar from './components/NavBar';


function App() {

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
