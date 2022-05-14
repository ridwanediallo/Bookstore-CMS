import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesActions } from '../redux/categories/categoriesSlice';
import './categories.css'


const Categories = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.categories.showText);

  const toggleTextHandler = () => {
    dispatch(categoriesActions.toggleText());
  }
  return (
    <div className="status">
      <button onClick={toggleTextHandler} type="button" className="status-btn">
        Check status
      </button>
      {show && <h3 className="under-contr">Under Construction</h3>}
    </div>
  );
};

export default Categories;


