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

const AddDepartment = () => {


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

    <Link to='/departments' className=' border-r border-color-border cursor-pointer flex items-center py-4 px-4 hover:bg-gray-100'><FaChevronLeft className='text-color-primary' /> </Link>

<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaPlus/> Add New Department</h2>
</div>

<Switch id="airplane-mod" className='' checked={true} /> 
</div>


<div className="px-14 py-4">

<Card className="p-0">
  <CardContent className="px-0 py-5">
    


  <div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2  "> Faculty <span className='text-red-800'>*</span></label>
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

    <div className="py-2 px-5">

    <label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Name of Department <span className='text-red-800'>*</span></label>
        <Input type="text" className="mt-2" />

    </div>


    <div className="py-2 px-5">
        <label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Abbreviation</label>

        <Input type="text" className="mt-2" />

    </div>

    <div className="pt-2 pb-5 px-5">
        <label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Default level</label>

        <Input type="text" className="mt-2" disabled value="100 LEVEL" />
<span className='text-sm italic text-gray-400'>(You can change this afterwards, if you have a different naming style)</span>
    </div>


    <div className="pt-2 pb-5 px-5">
        <label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Program Duration</label>

        <Input type="text" className="mt-2"  placeholder='E.g Four Years' />
    </div>


    <div className="pt-2 pb-5 px-5">
        <label htmlFor="" className=" text-sm leading-1 text-color-gray-2 "> Qualification on Completion</label>

        <Input type="text" className="mt-2"  placeholder='E.g Bachelor of Science (BSc)' />
    </div>

    <div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2  "> Head of Department <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select Staff"
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

export default AddDepartment
