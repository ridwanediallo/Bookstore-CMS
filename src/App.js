import { Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.css';

import Books from './components/Books';
import Categories from './components/Categories';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
