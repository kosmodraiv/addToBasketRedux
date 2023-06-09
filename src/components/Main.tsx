import React from 'react';
import List from "./List";
import Basket from "./basket";
import { useState } from "react";
import Header from './Header';

const Main: React.FC = () =>{

    const [blured, setBlured] = useState<boolean>(false);

    const onBluredBackground = () => {
        setBlured(true);
    };

    const unBluredBackground = () => {
        setBlured(false);
    };

    
return (
    <>
        <Header />
        <List
            blured={blured}
        />

        <Basket
            onBluredBackground={onBluredBackground}
            unBluredBackground={unBluredBackground}
        />
    </>
);

}

export default Main;
