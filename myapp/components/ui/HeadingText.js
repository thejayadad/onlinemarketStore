'use client'
import React from 'react'

const HeadingText = ({title, description}) => {
  return (
    <div>
         <h2 className='text-3xl font-bold tracking-tight cursor-pointer hover:translate-y-[-2px] transition-transform duration-300'>{title}</h2>
        <p className='text-sm text-gray-500 text-muted-foreground cursor-pointer hover:translate-y-[-2px] transition-transform duration-300'>{description}</p>
    </div>
  )
}

export default HeadingText