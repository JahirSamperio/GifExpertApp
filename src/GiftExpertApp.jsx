import React from 'react'
import {useState} from 'react'
import { AddCategory, GifGrid } from './components'

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Star Wars' ])

    const onAddCategory = (newCategory) => {
        // categories.push(newCategory);
        if (categories.includes(newCategory)) return; //Corta la funcion si ya existe un elemento igual
        // setCategories(categories.push('Valorant'))
        setCategories([ newCategory, ...categories ])
    }
  return (
    <>
        <h1>Gift Expert App</h1>
        <AddCategory 
            title = {'Agregar categoria'}
            // setCategories={setCategories}
            onNewCategory = { ( event ) => onAddCategory(event)} //event es el argumento, no importa el nombre
        />
        { 
            categories.map( (category) => (
                <GifGrid 
                    key={category}
                    category={category}
                />
            ))
        }

    </>
  )
}
