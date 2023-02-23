import React from 'react'
import { useParams } from 'react-router-dom';
import { getProductsById } from '../fetcher';

const ProductDetail = () => {

  const params = useParams();
  const [product, setProduct] = React.useState({ error: "", data: {} });

  React.useEffect(() => {

    const fetchProduct = async () => {
      const res = await getProductsById(params.productId);
      setProduct(res);
    }
    fetchProduct();

  }, [params.productId]);



  return (
    <>
      <div className="category-product-title">
        {product.data.title}
      </div>
      <article>

        <figure>
          <div className="category-product-image-container">
            <img src={`../assets/${product.data?.image}`} alt={product.data?.title} />
          </div>
        </figure>
        <aside>
          <div className="category-product-info-dimensions">
            <h3>Dimension</h3>
            <label>{product.data?.specs?.dimensions}</label>
          </div>
          {product.data?.specs?.capacity && (<div className="category-product-info-capacity">
            <h3>Capacity</h3>
            <label>{product.data?.specs.capacity}</label>
          </div>)}
          <div className="category-product-info-features">
            <h3>Features</h3>
            <ul>
              {
                product.data?.features?.map((feature, index) => {
                  return <li key={index} >{feature}</li>
                })
              }
            </ul>
          </div>
        </aside>

        <aside className="category-product-finance">
          <div className="category-product-finance-price">
            &pound;{product.data?.price}
          </div>
          <div className="category-product-info-stock">
            <label>Stock Level: {product.data?.stock}</label>
            <label>Free Delivery</label>
          </div>
          <div className="category-product-action">
            <button>Add to Basket</button>
          </div>
        </aside>
        <div>
          {product.data?.description}
        </div>
      </article>

    </>
  )
}

export default ProductDetail