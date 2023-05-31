import React from 'react';
import {HeaderMain} from './Styles'
import {HeaderLogo} from './Styles'

const Header: React.FC = () => {

  return (
    <>
    <HeaderMain>
            <HeaderLogo>
                <span>Kit.</span> Store
            </HeaderLogo>
    </HeaderMain>
    </>
  )
};

export default Header;
