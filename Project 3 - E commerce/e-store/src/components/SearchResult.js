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
        if (products.data.length > 0) {
            return products.data.map((p) => (
                <CategoryProduct key={p.id} {...p}>
                    {p.title}
                </CategoryProduct>
            ));
        } else {
            return <div>No Result Found</div>
        }
    };

    return (
        <div>{renderProducts()}</div>
    )
}

export default SearchResult;