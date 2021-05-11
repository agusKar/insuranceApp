import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: white;
  padding: 3rem;
`;


function App() {

  const [ resumen, guardarResumen ] = useState({});

  const {datos, resultado} = resumen;

  return (
    <Contenedor>
      <Header
        titulo="Cotizador de Seguros"
      ></Header>

      <ContenedorFormulario>
        <Formulario
          guardarResumen = {guardarResumen}
        />
        {
          (datos)?
          <Resumen 
            datos = {datos}
          />
          : null
        }
        {
          (resultado)?
          <Resultado 
            resultado = {resultado}
          />
          : null
        }
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
