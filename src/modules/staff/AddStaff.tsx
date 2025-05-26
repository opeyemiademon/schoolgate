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
const AddStaff = () => {


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
    

    <div className="border-b flex justify-between items-center border-color-border w-full pr-5  bg-white">

  

    <div className='flex items-center gap-5 '>

    <Link to='/staff' className=' border-r border-color-border cursor-pointer flex items-center py-4 px-4 hover:bg-gray-100'><FaChevronLeft className='text-color-primary' /> </Link>

<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaPlus/> Add New Staff</h2>
</div>


<Switch id="airplane-mod" className='' checked={true} /> 
</div>


      <div className="px-14 py-4">
<Card className="p-0">
  <CardContent className="p-0">
    
<div className='pt-5'>
 


<div className="py-2 px-5">



<div className="grid grid-cols-2 gap-4 mt-2">

<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Select Title <span className='text-red-800'>*</span></label>
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

  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> First Name</label>

  <Input type="text" className="mt-2" />
  </div>



  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Last Name</label>

  <Input type="text" className="mt-2" />
  </div>

  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Othername</label>

  <Input type="text" className="mt-2" />
  </div>

  </div>

 
  </div>
  <hr className="mt-5 text-color-border " />

<div className="py-2 px-5">

<div className="grid grid-cols-2 gap-4 mt-2">

<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Select Faculty <span className='text-red-800'>*</span></label>
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



<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Select Department <span className='text-red-800'>*</span></label>
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


<div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Work Email</label>

  <Input type="text" className="mt-2" />
  </div>

  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mobile Phone</label>

  <Input type="text" className="mt-2" />
  </div>



<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Employment System <span className='text-red-800'>*</span></label>
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



<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Job Title <span className='text-red-800'>*</span></label>
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
</div>
</div>




<hr className="mt-5 text-color-border " />

<div className="py-2 px-5">


<div className="grid grid-cols-2 gap-4 mt-2">

<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Gender <span className='text-red-800'>*</span></label>


<div className="flex gap-10 mt-2">

    <RadioItem title='Male' name='gender' checked={false} handleChange={handleChange} />
   <RadioItem title='Female' name='gender' checked={true} handleChange={handleChange} />
  </div>

</div>




<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2  "> Is Academic Staff ? <span className='text-red-800'>*</span></label>


<div className="flex gap-10 mt-2">

    <RadioItem title='Yes' name='gender' checked={false} handleChange={handleChange} />
   <RadioItem title='No' name='gender' checked={true} handleChange={handleChange} />
  </div>

</div>


</div></div>
    

<hr className=" mt-10 text-color-border " />


  
<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Profile Picture <span className='text-red-800'>*</span></label>
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center h-36 flex  cursor-pointer hover:border-border group'>

      <span className='text-sm text-color-gray-2/70 group-hover:text-color-gray-2'>DROP FILE HERE TO UPLOAD</span>
    </div>
</div>



<hr className=" mt-10 text-color-border " />
<div className=" py-2 px-5 flex items-center gap-6 my-5 ">
 

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Create Login Details  </label>

<Switch id="airplane-mod" className='' checked={true} />
</div>



<div>


</div>



<div className=" pt-2 pb-5 px-5 bg-blue-50 rounded-b-sm">

<div className="grid grid-cols-2 gap-4 mt-2">

<div className=" ">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Access Group <span className='text-red-800'>*</span></label>
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


<div className=" ">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Email Address <span className='text-red-800'>*</span></label>
    <Input type="text" className="mt-2" />

</div>



<div className=" ">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Password <span className='text-red-800'>*</span></label>
    <Input type="text" className="mt-2" />

</div>



<div className=" ">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Confirm Password <span className='text-red-800'>*</span></label>
    <Input type="text" className="mt-2" />

</div>

</div>

<span className='text-sm italic text-gray-400'>Please choose a difficult-to-guess combination of text containing upper- and lowercase letters, symbols, and digits for the password.</span>
</div>




</div>


  </CardContent>
</Card>
<hr className="mt-5 mb-20 text-color-border " />
</div>



<div className="flex justify-between items-center bg-white border-t-2 border-t-color-border px-20 py-5 bottom-0 sticky w-full  ">

    <h2 className="text-sm font-medium">Unsaved Changes</h2>

    <div className="flex gap-3">
    <Button variant={'white'} size='md' className="">Discard</Button>

    <Button variant={'primary'} size='md' className="">Save</Button>
    </div>
</div>
    </Template>
  )
}

export default AddStaff
