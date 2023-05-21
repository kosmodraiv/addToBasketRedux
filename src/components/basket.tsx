import React, { useState } from 'react';
import styled from "styled-components";
import 'animate.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromBasket, updateQuantity } from './Store';

interface BasketProps {
  unblurBg: () => void;
  blurBg: () => void;
  RemoveProduct: React.ComponentType<any>;
  AmountInput: React.ComponentType<any>;
  AmountSpace: React.ComponentType<any>;
  AmountText: React.ComponentType<any>;
  ItemBasketName: React.ComponentType<any>;
  BasketItem: React.ComponentType<any>;
  ListBasket: React.ComponentType<any>;
  Amount: React.ComponentType<any>;
  AmountBasket: React.ComponentType<any>;
  CloseBasket: React.ComponentType<any>;
  RemoveSpace: React.ComponentType<any>;
  BuyProduct: React.ComponentType<any>;
}

const BasketImg = styled.img`
  top: 0;
  right: 0;
  width: 60px;
  margin-right: 1%;
  position: fixed;
  cursor: pointer;
  `;

const Basket: React.FC<BasketProps> = ({
  blurBg,
  unblurBg,
  RemoveProduct,
  AmountInput,
  AmountSpace,
  AmountText,
  ItemBasketName,
  BasketItem,
  ListBasket,
  Amount,
  AmountBasket,
  CloseBasket,
  RemoveSpace,
  BuyProduct
}) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const handleClickOpen = () => {
    setVisible(true);
  };

  const handleClickClose = () => {
    setVisible(false);
  };

  const StyledBasket = styled.div`
    z-index: 99;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 50%;
    background-color: #3A4F50;
    border-radius: 10px;
    visibility: ${visible ? "visible" : "hidden"};
    box-shadow: 0 3px 15px #0EF6CC;
  `;

  const basketItems = useSelector((state: any) => state.basket.items);

  const basketAmount = basketItems.length;

  return (
    <>
      <BasketImg
        onClick={() => {
          handleClickOpen();
          blurBg();
        }}
        src="https://res.cloudinary.com/dultruinc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/Shop/rulkwtfu8ayzvlk0jmfp"
      ></BasketImg>

      <AmountBasket>
        <Amount>{basketAmount}</Amount>
      </AmountBasket>

      <StyledBasket className={`${visible ? 'animate__animated animate__fadeIn' : ''}`}>
        <CloseBasket onClick={() => { handleClickClose(); unblurBg() }} src='https://res.cloudinary.com/dultruinc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/Shop/dwpjfjzia6frq5oethlf'></CloseBasket>

        <ListBasket>
          {basketItems.map((item: any) => (
            <BasketItem key={item.id}>
              <ItemBasketName>Product: {item.product.name}</ItemBasketName>

              <AmountText>Amount:</AmountText>

              <AmountSpace>

                <AmountInput
                  type="number"
                  value={item.quantity}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const newQuantity = parseInt(e.target.value) || 0;

                    if (newQuantity === 0) {
                      dispatch(updateQuantity({ itemId: item.product.id, quantity: newQuantity }));
                    } else {
                      dispatch(updateQuantity({ itemId: item.product.id, quantity: newQuantity }));
                    }
                  }}
                />
              </AmountSpace>

              <AmountText>Price: {item.product.price * item.quantity} UAH</AmountText>

              <RemoveSpace>
                <BuyProduct>Buy</BuyProduct>
                <RemoveProduct onClick={() => dispatch(removeFromBasket(item.product.id))}>Remove</RemoveProduct>
              </RemoveSpace>

            </BasketItem>
          ))}
        </ListBasket>
      </StyledBasket>
    </>
  );
}

export default Basket;
