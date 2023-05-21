import styled from 'styled-components';
import List from "./ShopList";
import Basket from "./basket";
import { useState } from "react";

    const ProductList = styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        margin-left: 30px;
    `

    const Product = styled.div`
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

    const ImagesSpace = styled.div`
        height: 70%;
        width: 100%;
        
    `

    const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit:cover;
        border-radius: 10px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    `

    const BotSpace = styled.div`
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const ProductName = styled.h1`
        color: white;
        font-size: 21px;
        text-align: center;
    `

    const ProductPrice = styled.h3`
        color: white;
        font-size: 18px;
    `

    const AddTo = styled.div`
        display: flex;
        flex-direction: row;
        margin-top: 2%
    `

    const Button = styled.button`
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

    const ButtonText = styled.h2`
        font-size: 12px;
        cursor: pointer;
    `

    const InputAmount = styled.input`
        width: 40px;
        height: 25px;
        margin-left: 5%;
        border-radius: 5px;
        border: none;
        text-align: center;
    `

    const CloseBasket = styled.img`
        width: 40px;
        position: absolute;
        right: 0;
        cursor: pointer;
        opacity: 0.6;

        &:hover{
            opacity: 1;
        }
    `

    const AmountBasket = styled.div`
        position: fixed;
        right: 44px;
        top: 29px;
        z-index: -1;
    `

    const Amount = styled.p`
        color: white;
    `

    const ListBasket = styled.div`
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

    const BasketItem = styled.div`
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

    const ItemBasketName = styled.p`
        padding-top: 20%;
        padding-bottom: 5%;
        text-align: center;
        font-size: 21px;
    `

    const AmountText = styled.p`
        text-align: center;
        font-size: 21px;
        margin-bottom: 5%;
    `

    const AmountSpace = styled.div`
        display: flex;
        justify-content:center;
        align-items: center;
    `

    const AmountInput = styled.input`
        width: 5vw;
        height: 3.5vh;
        border-radius: 5px;
        font-size: 18px;
        text-align: center;
        margin-bottom: 10%;
        font-weight: 600;
        border: none;
    `

    const RemoveSpace = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const BuyProduct = styled.button`
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

    const RemoveProduct = styled.button`
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

export default function Parent(){

    const [blur, setBlur] = useState(false);

    const blurBg = () => {
        setBlur(true);
    };

    const unblurBg = () => {
        setBlur(false);
    };

    const MainDiv = styled.div`
        display: flex;
        justify-content:center;
        align-items: center;
        filter: blur(${blur ? "5px" : "0px"});
    `


    
    return <>
        <List AddTo={AddTo}
        InputAmount={InputAmount}
        ButtonText={ButtonText} 
        Button={Button}
        blur={blur}
        ProductPrice={ProductPrice}
        ProductName={ProductName}
        BotSpace={BotSpace}
        Image={Image}
        ImagesSpace={ImagesSpace}
        Product={Product}
        ProductList={ProductList}
        MainDiv={MainDiv}
        />

        <Basket unblurBg={unblurBg} blurBg={blurBg}
        RemoveProduct={RemoveProduct}
        AmountInput={AmountInput}
        AmountSpace={AmountSpace}
        AmountText={AmountText}
        ItemBasketName={ItemBasketName}
        BasketItem={BasketItem}
        ListBasket={ListBasket}
        Amount={Amount}
        AmountBasket={AmountBasket}
        CloseBasket={CloseBasket}
        RemoveSpace={RemoveSpace}
        BuyProduct={BuyProduct}
        />
    </>
}