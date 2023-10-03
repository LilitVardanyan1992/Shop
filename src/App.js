import React from 'react';
import './App.css';
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Main />}></Route>
          <Route path="/filteredProducts/:type" element={<FilteredProducts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
