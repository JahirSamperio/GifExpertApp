import React, { useState } from 'react'
import PropTypes from 'prop-types';


//Se recibe el estado del componente padre
export const AddCategory = ({title, onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = () => {
        setInputValue(event.target.value)
    }

    const onSubmit = () => {
        //No permite que se ponga los elementos por defecto
        event.preventDefault();
        //No permite que haya espacios
        if(inputValue.trim().length <= 1) return;
        //Inserta el nuevo elemento
        onNewCategory(inputValue.trim());
        //Setea el input en blanco
        setInputValue('')
    }

  return (
    <>
        <form onSubmit={ (event) => onSubmit(event)} aria-label="form">
            <p> {title} </p>
            <input 
                type='text'
                placeholder='Buscar gif'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    </>
  )
}

AddCategory.propTypes = {   
    onNewCategory: PropTypes.func.isRequired
}