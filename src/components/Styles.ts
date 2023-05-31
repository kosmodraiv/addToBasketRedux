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
    background: black;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: none;
  }

  body {
    position: relative;
    background-color: white;
    font-family: 'Nunito Sans', sans-serif;
  }
  
  body::before,
  body::after {
    content: "";
    position: fixed;
    top: 0;
    width: 0;
    height: 0;
  }

//   body::before {
//     right: 0;
//     top: 80%;
//     border-bottom: 200px solid black;
//     border-left: 200px solid transparent;
//     z-index: -1;
//   }
  
`;

export const ProductList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
`

export const Product = styled.div`
    width: 300px;
    height: 350px;
    border-radius: 10px;
    margin: 1% 2% 1% 2%;
    box-shadow: 0 3px 6px 0 white;
    background-color: white;
    transition: all 0.2s ease-in-out;

    &:hover{
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: 0 0px 3px 0 black;
        transition: all 0.2s ease-in-out;
    }
`

export const ImagesSpace = styled.div`
    height: 60%;
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
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const ProductText = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProductName = styled.h1`
    color: black;
    font-size: 21px;
`

export const ProductPrice = styled.h3`
    margin-top: 10px;
    font-size: 18px;
    background-color: black;
    padding: 5px;
    color: white;
`

export const AddTo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Button = styled.button`
    width: 150px;
    height: 27px;
    background-color: black;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    color: white;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    &:hover{
        background-color: white;
        transition: all 0.2s ease-in-out;
        border: 1px solid black;
        color: black;
    }
`

export const ButtonText = styled.h2`
    font-size: 12px;
    cursor: pointer;
`

export const InputAmount = styled.input`
    width: 150px;
    height: 25px;
    border-radius: 5px;
    border: none;
    text-align: center;
    border: 1px solid black;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
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

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: black; 
        border-radius: 20px; 
        border: none; 
    }


    ::-webkit-scrollbar-track {
        background: white;
    };

`;

export const BasketItem = styled.div`
    padding: 1%;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 3px 15px black;
    color: black;
    font-weight: bold;
    height: 90%;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
    }

    &:nth-child(n+2){
        margin-left: 5%;
    }
`

export const ItemBasketName = styled.p`
    padding-top: 5%;
    text-align: center;
    font-size: 21px;
    min-width: 20vw;

    @media (max-width: 780px) {
        min-width: 40vw;
      }
`

export const AmountText = styled.p`
    text-align: center;
    font-size: 21px;
    margin-bottom: 5%;
    margin-top: 2%;
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
    margin-bottom: 5%;
    font-weight: 600;
`

export const RemoveSpace = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BuyProduct = styled.button`
    background-color: black;
    color: white;
    border: none;
    width: 7vw;
    height: 3vh;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    @media (max-width: 930px) {
        width: 20vw;
      }

    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
    }
`

export const RemoveProduct = styled.button`
    background-color: white;
    border: 1px solid black;
    width: 7vw;
    height: 3vh;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    @media (max-width: 930px) {
        width: 20vw;
      }

    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
    }

    &:nth-child(n+2){
        margin-top: 5%
    }
`

export const BasketImg = styled.img`
    top: 0;
    right: 0;
    width: 60px;
    padding: 0 18px 0 0;
    position: fixed;
    cursor: pointer;
`;

export const AmountBasket = styled.div`
    position: fixed;
    right: 44px;
    top: 29px;
    z-index: -1;
`;

export const BasketProductImg = styled.img`
    width: 100%;
    height: 70px;
    object-fit: cover;
    border: 1px solid black;
    border-radius: 10px;
`

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
    background-color: black;
    border-radius: 10px;
    visibility: ${props => props.visible ? "visible" : "hidden"};
    box-shadow: 0 3px 15px white;

    @media (max-width: 950px) {
        width: 90%;
      }
`;


////

export const HeaderMain = styled.div`
    height: 7vh;
    font-size: 26px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: -2;
`;


export const HeaderLogo = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    position: relative;
    user-select: none;

    &:before {
        content: '';
        position: absolute;
        top: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #fff;
    }
    
    &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #fff;
      }
    
    span {
        color: black;
        background-color: #fff;
        padding: 5px;
    } 
`;

