import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #333;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 20px;
    border: none;
  }

  body {
    background-color: #1B2223;
    font-family: 'Nunito Sans', sans-serif;
  }
`;

export const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-left: 30px;
`

export const Product = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 1%;
    margin-left: 5%;
    background-color: #505559;
    box-shadow: 0 3px 6px 0 white;
    transition: all 0.1s ease-in-out;

    &:hover{
        box-shadow: 0 3px 6px 0 #0EF6CC;
        transition: all 0.1s ease-in-out;
    }
`

export const ImagesSpace = styled.div`
    height: 70%;
    width: 100%;

`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`

export const BotSpace = styled.div`
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProductName = styled.h1`
    color: white;
    font-size: 21px;
    text-align: center;
`

export const ProductPrice = styled.h3`
    color: white;
    font-size: 18px;
`

export const AddTo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2%
`

export const Button = styled.button`
    width: 100px;
    height: 25px;
    background-color: #1E2126;
    border: none;
    border-radius: 5px;
    transition: all 0.1s ease-in-out;
    color: white;

    &:hover{
        background-color: #0EF6CC;
        transition: all 0.1s ease-in-out;
        color: black;
    }
`

export const ButtonText = styled.h2`
    font-size: 12px;
    cursor: pointer;
`

export const InputAmount = styled.input`
    width: 40px;
    height: 25px;
    margin-left: 5%;
    border-radius: 5px;
    border: none;
    text-align: center;
`

export const CloseBasket = styled.img`
    width: 40px;
    position: absolute;
    right: 0;
    cursor: pointer;
    opacity: 0.6;

    &:hover{
        opacity: 1;
    }
`

export const AmountBasket = styled.div`
    position: fixed;
    right: 44px;
    top: 29px;
    z-index: -1;
`

export const Amount = styled.p`
    color: white;
`

export const ListBasket = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-x: auto;
    margin-top: 2%;
    height: 90%;
    max-width: 90%;
    min-width: 90%;

    /* Дополнительные стили для overflow-x */
    ::-webkit-scrollbar {
        width: 12px;
    }

    /* Дополнительные стили для скроллбара */
    ::-webkit-scrollbar-thumb {
        background-color: gray;    /* цвет бегунка */
        border-radius: 20px;       /* округлось бегунка */
        border: none;  /* отступ вокруг бегунка */
    }

    /* Дополнительные стили для скроллбара */
    ::-webkit-scrollbar-track {
        background: #333;
    };

`;

export const BasketItem = styled.div`
    padding: 1%;
    background-color: #1B2223;
    border-radius: 10px;
    color: white;
    height: 90%;
    box-shadow: 0 0 8px 0 white;
    transition: all 0.2s ease-in-out;

    &:hover{
        box-shadow: 0 0 6px 0 #0EF6CC;
        transition: all 0.2s ease-in-out;
    }

    &:nth-child(n+2){
        margin-left: 5%;
    }
`

export const ItemBasketName = styled.p`
    padding-top: 20%;
    padding-bottom: 5%;
    text-align: center;
    font-size: 21px;
`

export const AmountText = styled.p`
    text-align: center;
    font-size: 21px;
    margin-bottom: 5%;
`

export const AmountSpace = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`

export const AmountInput = styled.input`
    width: 5vw;
    height: 3.5vh;
    border-radius: 5px;
    font-size: 18px;
    text-align: center;
    margin-bottom: 10%;
    font-weight: 600;
    border: none;
`

export const RemoveSpace = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BuyProduct = styled.button`
    background-color: #0EF6CC;
    border: none;
    width: 7vw;
    height: 3vh;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #F4FEFD;
    }
`

export const RemoveProduct = styled.button`
    background-color: #3A4F50;
    border: none;
    width: 7vw;
    height: 3vh;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        background-color: #F4FEFD;
        transition: all 0.2s ease-in-out;
    }

    &:nth-child(n+2){
        margin-top: 5%
    }
`

export const BasketImg = styled.img`
  top: 0;
  right: 0;
  width: 60px;
  margin-right: 1%;
  position: fixed;
  cursor: pointer;
  `;

export const MainDiv = styled.div<{ blured: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(${props => (props.blured ? "5px" : "0px")});
`;


export const StyledBasket = styled.div<{visible: boolean}>`
    z-index: 99;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 50%;
    background-color: #3A4F50;
    border-radius: 10px;
    visibility: ${props => props.visible ? "visible" : "hidden"};
    box-shadow: 0 3px 15px #0EF6CC;
`;