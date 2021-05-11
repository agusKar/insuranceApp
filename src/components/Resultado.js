import React from 'react';
const Resultado = ({resultado}) => {

    return ( 
        (resultado === ''
        ? 
         <p>Debe completar todos los datos</p>
        : 
         <div>La cotización es: $ {resultado}</div>   
        )
     );
}
 
export default Resultado;