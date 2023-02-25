import React from 'react';
import './App.css'
import { getCategories } from './fetcher';
import { Link } from 'react-router-dom';
import Layout from './components/Layout';
import {
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import Basket from './components/Basket';
import Category from './components/Category';
import Home from './components/Home';
import OrderConfirmation from './components/OrderConfirmation';
import SearchResult from './components/SearchResult';

const App = () => {

    const [categories, setCategories] = React.useState({ error: "", data: [] })

    React.useEffect(() => {
        const fetchCategories = async () => {
            const response = await getCategories();
            setCategories(response);
        }
        fetchCategories();

    }, []);

    return (

        <>
            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Layout categories={categories}/>} >
                        <Route index element={<Home />} />
                        <Route path="/products/:productId" element={<ProductDetail />} />
                        <Route path="/categories/:categoryId" element={<Category />} />
                        <Route path="/basket" element={<Basket />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
                        <Route path="/search" element={<SearchResult />} />
                    </Route>

                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App