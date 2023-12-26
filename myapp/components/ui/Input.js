import React from 'react'

const Input = ({name, placeholder, type}) => {
    return (
    <input 
    name={name}
    placeholder={placeholder}
    type={type} 
    className="input w-full max-w-xs"
    />
  )
}

export default Input