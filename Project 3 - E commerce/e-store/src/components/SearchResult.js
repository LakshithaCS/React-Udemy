import React from 'react';
import { getProductsByQuery } from '../fetcher';
import { useSearchParams } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';

const SearchResult = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get('s');

    const [products, setProducts] = React.useState({ error: "", data: [] });

    React.useEffect(() => {
        const fetchProducts = async () => {
            const res = await getProductsByQuery(query);
            setProducts(res);
        }
        fetchProducts();
    }, [query]);


    const renderProducts = () => {
        return products.data.map((p) => (
            <CategoryProduct key={p.id} {...p}>
                {p.title}
            </CategoryProduct>
        ));
    };

    return (
        <div>{renderProducts()}</div>
    )
}

export default SearchResult;