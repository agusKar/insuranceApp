import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
  color: #fff;
  background-color:#26c6da;
  padding: 10px;
  font-weight:bold;
`;

const TituloHeader = styled.h1`
    text-align: center;
`;

const Header = ({ titulo }) => {
    return ( 
        <ContenedorHeader>
            <TituloHeader>{titulo}</TituloHeader>
        </ContenedorHeader>
     );
}
 
export default Header;