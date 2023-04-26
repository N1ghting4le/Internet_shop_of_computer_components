import AppHeader from '../appHeader/AppHeader';

import { lazy } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Suspense } from 'react';

import './App.css';

const MainPage = lazy(() => import('../../pages/mainPage/MainPage'));
const SingleCategoryPage = lazy(() => import('../../pages/singleCategoryPage/SingleCategoryPage'));
const SingleItemPage = lazy(() => import('../../pages/singleItemPage/SingleItemPage'));
const CartPage = lazy(() => import('../../pages/cartPage/CartPage'));

function App() {
  return (
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
  );
}

export default App;
