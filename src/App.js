import React from 'react';
import './App.css';
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts';
import SingleProduct from './Components/FilteredProducts/SingleProduct';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // console.log("cart", cart);
  // console.log("totalAmount", totalAmount);
  // console.log("totalPrice", totalPrice);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Main />}></Route>
          <Route path="/filteredProducts/:type" element={<FilteredProducts />}></Route>
          <Route path="/filteredProducts/:type/:id" element={ <SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
