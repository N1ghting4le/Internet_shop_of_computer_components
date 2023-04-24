import AppHeader from '../appHeader/AppHeader';
import MainPage from '../../pages/mainPage/MainPage';
import SingleCategoryPage from '../../pages/singleCategoryPage/SingleCategoryPage';
import SingleItemPage from '../../pages/singleItemPage/SingleItemPage';
import CartPage from '../../pages/cartPage/CartPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Suspense } from 'react';

import './App.css';

function App() {
  return (
    <>
      <Suspense>
        <Router>
          <AppHeader/>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/:category' element={<SingleCategoryPage/>}/>
            <Route path='/:category/:id' element={<SingleItemPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
