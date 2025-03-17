import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Template from '@/Layout/Template'
import { FaChevronLeft, FaEdit, FaPlus } from 'react-icons/fa'
import { RefreshCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import Select from 'react-tailwindcss-select'
import { selectStyle } from '@/components/GlobalFunction'
import RadioGroup, { RadioItem } from '@/components/RadioGroup'
const AddStudent = () => {


    const [animal, setAnimal] = useState(null);
  const options = [
    { value: "fox", label: " Fox" },
    { value: "Butterfly", label: " Butterfly" },
    { value: "Honeybee", label: " Honeybee" }
  ];
  
  const handleChange = (value:any) => {
    console.log("value:", value);
    setAnimal(value);
  };

  return (
    <Template>
    

    <div className="border-b flex justify-between items-center border-color-border w-full  bg-white">

  

    <div className='flex items-center gap-5 '>

    <Link to='/student' className=' border-r border-color-border cursor-pointer flex items-center py-4 px-4 hover:bg-gray-100'><FaChevronLeft className='text-color-primary' /> </Link>

<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaPlus/> Add New Student</h2>
</div>


 <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><RefreshCcw className='h-4'/></a> 
</div>


      <div className="px-14 py-4">
<Card className="p-0">
  <CardContent className="p-0">
    
<div className='py-5'>
  <div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Matriculation Number <span className='text-red-800'>*</span></label>
    <Input type="text" disabled className="mt-2" value="FT23POL0123" />
<span className='text-xs text-muted-foreground'>This is usually auto generated, and it can change at the point of submission if duplicate is detected</span>
</div>


<div className="py-2 px-5">


<div className="grid grid-cols-3 gap-4 mt-2">
  <div className="">
  <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> First Name</label>

  <Input type="text" className="mt-2" />
  </div>



  <div className="">
  <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Last Name</label>

  <Input type="text" className="mt-2" />
  </div>

  <div className="">
  <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Othername</label>

  <Input type="text" className="mt-2" />
  </div>

  </div>

  </div>

   




<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Gender <span className='text-red-800'>*</span></label>


<div className="flex gap-10 mt-2">

    <RadioItem title='Male' name='gender' checked={false} handleChange={handleChange} />
   <RadioItem title='Female' name='gender' checked={true} handleChange={handleChange} />
  </div>

</div>





    
<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Email Address <span className='text-red-800'>*</span></label>
    <Input type="text" className="mt-2" />
    <span className='text-xs text-color-gray-2'>Must be unique and be the one student have access to</span>
</div>


<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Telephone <span className='text-red-800'>*</span></label>
    <Input type="text" className="mt-2" />

</div>



<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Faculty <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select.."
                classNames={selectStyle}
            />
</div>

<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Department <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select faculty first"
                classNames={selectStyle}
            />
</div>


<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Unit <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select department first"
                classNames={selectStyle}
            />
</div>



<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Status <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any"
                classNames={selectStyle}
            />
</div>

  
<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Profile Picture <span className='text-red-800'>*</span></label>
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center h-36 flex  cursor-pointer hover:border-border group'>

      <span className='text-sm text-color-gray-2/70 group-hover:text-color-gray-2'>DROP FILE HERE TO UPLOAD</span>
    </div>
</div>
</div>


  </CardContent>
</Card>
<hr className="mt-5 mb-20 text-color-border " />
</div>



<div className="flex justify-between items-center bg-white border-t-2 border-t-color-border px-20 py-5 bottom-0 sticky w-full  ">

    <h2 className="text-base font-medium">Unsaved Changes</h2>

    <div className="flex gap-3">
    <Button variant={'white'} size='md' className="">Discard</Button>

    <Button variant={'primary'} size='md' className="">Save</Button>
    </div>
</div>
    </Template>
  )
}

export default AddStudent
