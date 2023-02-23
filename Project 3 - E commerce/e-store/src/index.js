import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import Basket from './components/Basket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
