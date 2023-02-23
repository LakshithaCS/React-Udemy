import React from 'react'
import { useParams } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';
import { getProducts } from '../fetcher';

const Category = ({ id, title, onCategoryClick }) => {

    const { categoryId } = useParams();
    const [products, setProducts] = React.useState({ error: "", data: [] });

    React.useEffect(() => {

        const fetchProduct = async () => {
            const res = await getProducts(categoryId);
            setProducts(res);
        }
        fetchProduct();

    }, [categoryId]);

    const renderProducts = () => {
        return products.data.map((p) => (
            <CategoryProduct key={p.id} {...p}>
                {p.title}
            </CategoryProduct>
        ));
    };

    return (
        <div>
            {products.error && <div>Error: {products.error}</div>}

            {products.data && renderProducts()}
        </div>
    )
}

export default Category