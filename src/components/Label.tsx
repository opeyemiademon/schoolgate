import React from 'react'

const Label = ({title, is_reqired}:{title:string, is_reqired?:Boolean}) => {
  return (  <label htmlFor="" className="text-sm font-bold  leading-1 text-gray-700"> {title} {is_reqired&&<span className='text-red-800'>*</span>}</label>
      
  )
}

export default Label
