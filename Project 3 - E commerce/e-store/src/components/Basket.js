import React from 'react';
import styled from "styled-components";
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { UpIcon, DownIcon, TrashIcon } from './icons';

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);
  const { getItems, clear, increseQty, decreseQty, removeProduct } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(getItems());
  }, [])

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems])

  const renderTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0);
    return <>£{total}</>
  }

  const renderCart = () => {
    if (cartItems.length === 0) {
      return <div>The Baskey Is Empty</div>
    } else {
      return cartItems.map(item => {
        return (
          <React.Fragment key={item.id}>
            <div >
              <Link to={`/products/${item.id}`}>{item.title}</Link>
            </div>
            <BasketQty>
              {item.quantity}
              <UpIcon width={20} onClick={() => setCartItems(increseQty(item))} />
              <DownIcon width={20} onClick={() => setCartItems(decreseQty(item))} />
              <TrashIcon width={20} onClick={() => setCartItems(removeProduct(item))} />
            </BasketQty>
            <BasketPrice>
              {item.price}
            </BasketPrice>
          </React.Fragment>
        )
      })
    }
  }

  return (
    <BasketContainer>
      <BasketTitle>Shopping Basket</BasketTitle>
      <BasketButton onClick={() => navigate('/checkout')}>Checkout</BasketButton>

      <BasketTable>
        <BasketHeader>
          <h4>Item</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </BasketHeader>
        <BasketHeaderLine />
        <BasketHeader>
          {renderCart()}
        </BasketHeader>
        <BasketHeaderLine />
      </BasketTable>

      <BasketButton onClick={() => setCartItems(clear())}>Clear</BasketButton>
      <BasketTotal>Total: {renderTotal()} </BasketTotal>
    </BasketContainer>
  )
}

export default Basket;

const BasketContainer = styled.div`
    display: grid;
    padding: 20px;
    grid-template-rows: 0.25fr 1fr 0.25fr;
    grid-template-columns: 0.1fr 1fr 0.1fr;
`;

const BasketTable = styled.div`
    grid-column: 1 / span 3;

    grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
    column-gap: 20px;
    padding-left: 10px;
`;

const BasketHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr;
`;

const BasketHeaderLine = styled.hr`
    margin-bottom: 20px;
    border: 1px solid gray;
`;

const BasketTitle = styled.h2`
  grid-column: 1 / span 2;

  padding-bottom: 20px;
`;

const BasketQty = styled.h3`
    font-size: 18px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

const BasketPrice = styled.h3`
    font-size: 20px;
    font-weight: bold;
`;

const BasketTotal = styled.h2`
    justify-self: end;
`;

const BasketButton = styled.button`
  border-radius: 8px;
  height: 40px;
`;