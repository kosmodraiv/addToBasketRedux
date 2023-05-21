import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from './Store';

interface ListProps {
  AddTo: React.ComponentType<any>;
  InputAmount: React.ComponentType<any>;
  ButtonText: React.ComponentType<any>;
  Button: React.ComponentType<any>;
  ProductPrice: React.ComponentType<any>;
  ProductName: React.ComponentType<any>;
  BotSpace: React.ComponentType<any>;
  Image: React.ComponentType<any>;
  ImagesSpace: React.ComponentType<any>;
  Product: React.ComponentType<any>;
  ProductList: React.ComponentType<any>;
  MainDiv: React.ComponentType<any>;
}

const List: React.FC<ListProps> = ({ AddTo, InputAmount, ButtonText, Button, ProductPrice, ProductName, BotSpace, Image, ImagesSpace, Product, ProductList, MainDiv }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://6468dbba60c8cb9a2cb3d6dc.mockapi.io/shop/list')
      .then(res => res.json())
      .then(json => {
        setList(json);
      })
      .catch(err => {
        console.warn(err);
        alert('Not found');
      });
  }, []);

  const [quantities, setQuantities] = useState<number[]>([]);
  const dispatch = useDispatch();

  return (
    <MainDiv>
      <ProductList>
        {list.map((obj: any) => (
          <Product key={obj.id}>
            <ImagesSpace>
              <Image src={obj.image}></Image>
            </ImagesSpace>

            <BotSpace>
              <ProductName>{obj.name}</ProductName>
              <ProductPrice>{obj.price} UAH</ProductPrice>

              <AddTo>
                <Button
                  onClick={() => {
                    dispatch(addToBasket({ product: obj, quantity: parseInt(quantities.toString()[obj.id]) }));
                  }}
                >
                  <ButtonText>Add to Basket</ButtonText>
                </Button>

                <InputAmount
                  min="1"
                  type="number"
                  value={quantities[obj.id] ?? 1}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const newQuantities = [...quantities];
                    const newValue = parseInt(e.target.value);

                    if (newValue >= 1) {
                      newQuantities[obj.id] = newValue;
                    } else {
                      newQuantities[obj.id] = 1;
                    }

                    setQuantities(newQuantities);
                  }}
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
