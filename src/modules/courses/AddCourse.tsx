import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Template from './Layout/Template'
import { FaChevronLeft, FaEdit, FaLink, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { RefreshCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import Select from 'react-tailwindcss-select'
import { selectStyle } from '@/components/GlobalFunction'
import RadioGroup, { RadioItem } from '@/components/RadioGroup'

const AddCourse = () => {


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
    

    <div className="border-b flex justify-between items-center border-color-border w-full pr-5 bg-white">

  

    <div className='flex items-center gap-5 '>

    <Link to='/courses' className=' border-r border-color-border cursor-pointer flex items-center py-4 px-4 hover:bg-gray-100'><FaChevronLeft className='text-color-primary' /> </Link>

<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaPlus/> Add New Course</h2>
</div>

<Switch id="airplane-mod" className='' checked={true} /> 
</div>


<div className="px-14 py-4">

<Card className="p-0">
  <CardContent className="px-0 ">
    <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex  flex-col gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Add New Course</h5>
<span className='text-sm italic'>Manage student parent information for the new academic session.</span>
</div>


<div className="grid grid-cols-2 gap-4 py-2 px-5">


<div className="">

    <label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Course Title <span className='text-red-800'>*</span></label>
        <Input type="text" className="mt-2" />

    </div>


    <div className="">

    <label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Course Code <span className='text-red-800'>*</span></label>
        <Input type="text" className="mt-2" />

    </div>

</div>


<div className="grid grid-cols-2 gap-4 py-2 px-5">
  <div className=" ">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2  "> Department <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select "
                classNames={selectStyle}
            />
</div>


<div className=" ">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2  "> Course Type <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select Faculty"
                classNames={selectStyle}
            />
</div>

</div>


<div className="grid grid-cols-2 gap-4 py-2 px-5">


<div className=" ">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2  "> Course Level <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select Faculty"
                classNames={selectStyle}
            />
</div>



<div className=" ">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2  "> Course Semester <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select Faculty"
                classNames={selectStyle}
            />
</div>



</div>



<div className="grid grid-cols-3 gap-4 py-2 px-5">


<div className="">

<label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Credit Unit <span className='text-red-800'>*</span></label>
    <Input type="text" className="mt-2" />

</div>


<div className="">

<label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Full Mark Obtainable  <span className='text-red-800'>*</span></label>
    <Input type="text" className="mt-2" value={100} />

</div>

<div className="">

<label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Pass Mark <span className='text-red-800'>*</span></label>
    <Input type="text" className="mt-2" value={40} />

</div>

</div>
 



<div className="grid grid-cols-2 gap-4 py-2 px-5">


<div className=" ">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2  "> Lecturer in Charge <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select Faculty"
                classNames={selectStyle}
            />
</div>



<div className=" ">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2  "> Assisting Lecturer(s) <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select Faculty"
                classNames={selectStyle}
            />
</div>



</div>


    <div className="py-2 px-5">
        <label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Is Pre-requisite to Pass?</label>

<br/><br/>
        <Switch id="airplan" className='' checked={false} />

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

export default AddCourse
