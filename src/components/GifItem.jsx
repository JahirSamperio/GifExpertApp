import React from 'react'
import PropTypes from 'prop-types';

export const GifItem = ({id, title, url}) => {

  return (
    <div className='card'>
        <img src={url} alt={title}></img>
        <p key={id}> { title } </p>
    </div>
  )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}