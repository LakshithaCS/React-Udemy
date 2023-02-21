import React from 'react';
import './App.css'
import Category from './components/Category';
import { getCategories, getProducts } from './fetcher';
import CategoryProduct from './components/CategoryProduct';

const App = () => {

    const [categories, setCategories] = React.useState({ error: "", data: [] })
    const [products, setProducts] = React.useState({ error: "", data: [] })

    React.useEffect(() => {
        const fetchCategories = async () => {
            const response = await getCategories();
            setCategories(response);
        }
        fetchCategories();

    }, []);

    const handleOnclickCategory = (id) => {
        const fetchProducts = async () => {
            const response = await getProducts(id);
            setProducts(response);
        }
        fetchProducts();
    }

    const renderCategories = () => {
        return categories.data.map((d) => {
            return <Category key={d.id} id={d.id} title={d.title} onCategoryClick={handleOnclickCategory} />;
        })
    }
    const renderProducts = () => {
        return products.data.map((p, index) => {
            return <CategoryProduct key={index} {...p}>{p.title}</CategoryProduct>
        })
    }

    return (

        <>
            <header>
                My store
            </header>

            <section>
                <nav>
                    {categories.error && (<div> Error: {categories.error}</div>)}
                    {categories.data && renderCategories()}
                </nav>
                <main>
                    <h1>Products</h1>
                    {products.error && (<div> Error: {products.error}</div>)}
                    {products.data && renderProducts()}
                </main>
            </section>

            <footer>
                Footer
            </footer>
        </>

    )
}

export default App