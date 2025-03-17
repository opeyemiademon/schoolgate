import React from 'react'

const CircleItem =()=> <span className="absolute bg-color-primary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        </span>

const Radio=(props:any)=>{
    return (<input name={props.name} type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-color-primary transition-all" id={props.id} checked={props.checked} onChange={props.handleChange} />)
}

const Label =({title}:{title:string})=><label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor={title}>{title}</label>


export const RadioItem =(props:any)=>{

    return <div className="inline-flex items-center">
    <label className="relative flex items-center cursor-pointer" htmlFor={props.title}>
    <Radio name={props.name} id={props.title} checked={props.checked} handleChange={props.handleChange} />
     <CircleItem />
    </label>
    <Label title={props.title} />
  </div>
}

const RadioGroup = () => {
  return (
<div className="flex gap-10">

    <RadioItem />
   <RadioItem />
  </div>
  )
}

export default RadioGroup
