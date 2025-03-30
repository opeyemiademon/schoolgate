import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Template from '@/Layout/Template'
import { FaChevronLeft, FaEdit, FaLink, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { RefreshCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import Select from 'react-tailwindcss-select'
import { selectStyle } from '@/components/GlobalFunction'
import RadioGroup, { RadioItem } from '@/components/RadioGroup'
import { FaCodeFork } from 'react-icons/fa6'

const Promotion = () => {


    const [animal, setAnimal] = useState(null);
  const options = [
    { value: "fox", label: " Increase Level" },
    { value: "Butterfly", label: " Decrease Level" },
    { value: "Honeybee", label: " Honeybee" }
  ];
  
  const handleChange = (value:any) => {
    console.log("value:", value);
    setAnimal(value);
  };

  return (
    <Template>
    

    <div className="border-b flex justify-between items-center border-color-border w-full pr-5 bg-white">

  

    <div className='flex items-center gap-5 '>


<h2 className="flex  gap-2 items-center px-4 font-semibold leading-3"><FaCodeFork/> Promote Student</h2>
</div>

<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><RefreshCcw className='h-4'/></a> 
</div>


<div className="px-14 py-4">

<Card className="p-0">
  <CardContent className="p-0">
    
    <div className="py-2 px-5">

    <label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Select Academic Session</label>
    <Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                isMultiple={true}
                placeholder="Select faculty first"
                classNames={selectStyle}
            />

    </div>


    <div className=" py-2 px-5">

<label htmlFor="" className="text-sm leading-1 text-color-gray-2 "> Select Faculty <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                isMultiple={true}
                placeholder="Select faculty first"
                classNames={selectStyle}
            />
</div>



<div className=" py-2 px-5">

<label htmlFor="" className="text-sm leading-1 text-color-gray-2 "> Select Department (Optional) <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                isMultiple={true}
                placeholder="Select faculty first"
                classNames={selectStyle}
            />
</div>

<div className="pt-2 pb-5 px-5">

<label htmlFor="" className="text-sm leading-1 text-color-gray-2 "> Action <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                isMultiple={true}
                placeholder="Select faculty first"
                classNames={selectStyle}
            />
</div>

   

  </CardContent>
</Card>
<hr className="mt-5 text-color-border " />


<div className='flex items-center justify-end'>

<Button type='button' variant={'white'} size={'md'} className='mt-3 '>Save</Button>
</div>

</div>



    </Template>
  )
}

export default Promotion
