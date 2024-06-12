import React from 'react'
import {useState} from 'react'

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'One punch', 'Star Wars' ])

    console.log(categories);
  return (
    <>
        {/* Titulo */}
        <h1>Gift Expert App</h1>
        {/* Input */}

        {/* Listado de gifs */}
        <ol>
            { 
                categories.map( category => {
                    return <li key={ category }>{ category }</li>
                })
            }
        </ol>
            {/* Gif item */}

    </>
  )
}
