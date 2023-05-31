import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from './Store';
import {ProductText, ProductList, Product, ImagesSpace, Image, BotSpace, ProductName, ProductPrice, AddTo, ButtonText, Button, InputAmount, MainDiv} from './Styles'

interface ListProps {
  blured: boolean;
}

const List: React.FC<ListProps> = ({ blured }) => {
  const dispatch = useDispatch();
  
  const [list, setList] = useState([]);
  const [quantities, setQuantities] = useState<number[]>([]);


  useEffect(() => {
    fetch('https://6468dbba60c8cb9a2cb3d6dc.mockapi.io/shop/list')
      .then(res => res.json())
      .then(json => {
        setList(json);
      })
      .catch(err => {
        alert('Not found');
      });
  }, []);


  function handleQuantityChange(e, goods) {
    const newQuantities = [...quantities];
    const newValue = parseInt(e.target.value);
  
    if (newValue >= 1) {
      newQuantities[goods.id] = newValue;
    } else {
      newQuantities[goods.id] = 1;
    }
  
    setQuantities(newQuantities);
  }

  return (
    <MainDiv blured={blured}>
      <ProductList>
        {list.map((goods: any) => (
          <Product key={goods.id}>

            <ImagesSpace>
              <Image src={goods.image} />
            </ImagesSpace>

            <BotSpace>

              <ProductText>
                <ProductName>{goods.name}</ProductName>
                <ProductPrice>{goods.price} UAH</ProductPrice>
              </ProductText>
              

              <AddTo>

                <Button
                  onClick={() => {
                    dispatch(addToBasket({ product: goods, quantity: Number(quantities[goods.id]) }));
                  }}
                >
                  <ButtonText>Add to Basket</ButtonText>
                </Button>

                <InputAmount
                  min="1"
                  type="number"
                  value={quantities[goods.id] ?? 1}
                  onChange={(e) => handleQuantityChange(e, goods)}
                />

              </AddTo>
            </BotSpace>

          </Product>
        ))}
      </ProductList>
    </MainDiv>
  );
}

export default List;
