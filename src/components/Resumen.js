import React, {Fragment} from 'react'
const Resumen = ({datos}) => {
    const {marca, year, plan, resultado} = datos;
    return ( 
        <Fragment>
            <h2>Resumen de la cotización</h2>
            <ul>
                <li>Marca: <b>{marca}</b></li>
                <li>Año: <b>{year}</b></li>
                <li>Plan: <b>{plan}</b></li>
            </ul>
        </Fragment>
     );
}
 
export default Resumen;