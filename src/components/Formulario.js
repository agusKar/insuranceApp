import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, obtenerIncrementoMarca } from '../Helper';

const Form = styled.form`
    background-color: white;
`;

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.input`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    margin-top: 1rem;
    transition: opacity .3s ease;
    &:hover{
        cursor: pointer;
        opacity: .8;
    }
`;

const Error = styled.div`
    width: 100%;
    background-color: red;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
    font-size: 16px;
    margin-bottom: 1rem;
`;

const Formulario = ({guardarResumen}) => {

    const [datos, guardarDatos] = useState({
        marca: '',
        year: '',
        plan: 'basico'
    });

    const [ error, guardarError ] = useState(false);

    // Extraer los valores del state
    const {marca, year, plan} = datos;

    // Obtener informacion del formulario
    const leerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario envia el form
    const enviarForm = e => {
        e.preventDefault();
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '' ){
            guardarError(true);
            return;
        }
        guardarError(false);

        // Empezar con una base
        let resultado = 2000;

        // Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(year);

        // Por cada año resta el 3%
        
        resultado -= ((diferencia*3)*resultado)/100;

        /*
            * Americano: 15%
            * Europeo: 30%
            * Asiatico: 5%
        */
        resultado *= obtenerIncrementoMarca(marca);

        /*
            * Plan basico: 20%
            * Plan completo: 50%
        */
        if (plan === "basico") {
            resultado *= 1.2;
        } else {
            resultado *= 1.5;            
        }
        // Total
        resultado = parseFloat(resultado).toFixed(2);
        guardarResumen({
            datos: datos,
            resultado: resultado
        });
    }


    return (
        <Form
            onSubmit={enviarForm}
        >
            {error? <Error>Todos los datos son requeridos. Vuelva a intentarlo.</Error> : null}
            <Campo>
                <Label htmlFor="marca">Marca</Label>
                <Select 
                    name="marca" 
                    value={marca}
                    onChange={leerInformacion}>
                        <option value="">-- Seleccione --</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label htmlFor="year">Año</Label>
                <Select 
                    name="year" 
                    value={year}
                    onChange={leerInformacion}>
                        <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label htmlFor="plan">Plan</Label>
                <InputRadio 
                    type="radio" 
                    name="plan" 
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={leerInformacion}
                    /> Básico
                <InputRadio 
                    type="radio" 
                    name="plan" 
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={leerInformacion}
                    /> Completo
            </Campo>
            <div>
                <Boton type="submit" value="Cotizar"/>
            </div>
        </Form>
    );
}

export default Formulario;