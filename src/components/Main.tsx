import React from 'react';
import List from "./List";
import Basket from "./Basket";
import { useState } from "react";

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
