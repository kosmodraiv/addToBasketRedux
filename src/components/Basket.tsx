import React, { useState } from 'react';
import 'animate.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromBasket, updateQuantity } from './Store';

import {BasketProductImg, StyledBasket, BasketImg, AmountBasket, Amount, ListBasket, CloseBasket, ItemBasketName, BasketItem, AmountText, AmountSpace, AmountInput, RemoveSpace, BuyProduct, RemoveProduct} from './Styles'

interface BasketProps {
  onBluredBackground: () => void;
  unBluredBackground: () => void;
}

const Basket: React.FC<BasketProps> = ({ onBluredBackground, unBluredBackground}) => {
  
  const dispatch = useDispatch();
  const [visible, setVisible] = useState<boolean>(false);

  const handleClickOpen = () => {
    setVisible(true);
  };

  const handleClickClose = () => {
    setVisible(false);
  };

  const basketItems = useSelector((state: any) => state.basket.items);
  const basketAmount = basketItems.length;

  function handleAmountChange (e, item) {
    const newQuantity = parseInt(e.target.value) || 0;

    if (newQuantity === 0) {
      dispatch(updateQuantity({ itemId: item.product.id, quantity: newQuantity }));
    } else {
      dispatch(updateQuantity({ itemId: item.product.id, quantity: newQuantity }));
    }
  }

  const BasketImage = "https://res.cloudinary.com/dultruinc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/Shop/rulkwtfu8ayzvlk0jmfp"
  const BasketCloseImage = 'https://res.cloudinary.com/dultruinc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/Shop/dwpjfjzia6frq5oethlf'
  return (
    <>
      <BasketImg
        onClick={() => {
          handleClickOpen();
          onBluredBackground();
        }}
        src={BasketImage}
      ></BasketImg>

      <AmountBasket>
        <Amount>{basketAmount}</Amount>
      </AmountBasket>

      <StyledBasket visible={visible} className={`${visible ? 'animate__animated animate__fadeIn' : ''}`}>
        <CloseBasket onClick={() => { handleClickClose(); unBluredBackground() }} src={BasketCloseImage} />


        <ListBasket>
          {basketItems.map((item: any) => (
            <BasketItem key={item.id}>
              <BasketProductImg src={item.product.image} />
              <ItemBasketName>Product: {item.product.name}</ItemBasketName>

              <AmountText>Amount:</AmountText>

              <AmountSpace>
                <AmountInput
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleAmountChange(e, item)}
                />
              </AmountSpace>

              <AmountText>Price: {item.product.price * item.quantity} UAH</AmountText>

              <RemoveSpace>
                <BuyProduct>Buy</BuyProduct>
                <RemoveProduct onClick={() => dispatch(removeFromBasket({ itemId: item.product.id }))}>Remove</RemoveProduct>
              </RemoveSpace>

            </BasketItem>
          ))}
        </ListBasket>
      </StyledBasket>
    </>
  );
}

export default Basket;
