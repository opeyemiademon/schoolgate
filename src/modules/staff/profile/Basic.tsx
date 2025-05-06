import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Template from '@/Layout/Template'
import { FaChevronLeft, FaChevronRight, FaEdit, FaExternalLinkAlt, FaExternalLinkSquareAlt, FaLink, FaSave, FaShare, FaTrash, FaTrashAlt } from 'react-icons/fa'
import { RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { RadioItem } from '@/components/RadioGroup'
import { selectStyle } from '@/components/GlobalFunction'
import Select from 'react-tailwindcss-select'
import { Checkbox } from '@/components/ui/checkbox'

const Basic = () => {

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
    <div>
      {/* <h2 className="text-xl my-2">Personal Information</h2> */}
<Card className="p-0">
  <CardContent className="p-0">
    
<div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex gap-2'>
 
  <h5 className='text-base font-semibold leading-4'>Personal Details</h5>

</div>

  <div className="py-2 px-5">

  <div className="grid grid-cols-3 gap-4 mt-2">

<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 ">  Title <span className='text-red-800'>*</span></label>
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


  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Nickname</label>

  <Input type="text" className="mt-2" />
  </div>
  </div>



  </div>

  <hr className="mt-5 text-color-border " />



  <div className="py-2 px-5">

  <div className="grid grid-cols-3 gap-4 mt-2">



  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> File Number</label>

  <Input type="text" className="mt-2" />
  </div>



  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Passport ID</label>

  <Input type="text" className="mt-2" />
  </div>

  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> National Identity No</label>

  <Input type="text" className="mt-2" />
  </div>


  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Birth Certificate No.</label>

  <Input type="text" className="mt-2" />
  </div>

  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Driver License No.</label>

  <Input type="text" className="mt-2" />
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

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2  "> Is Smoker? <span className='text-red-800'>*</span></label>


<div className="flex gap-10 mt-2">

    <Checkbox/>
  </div>

</div>


</div></div>

<hr className="mt-5 text-color-border " />


<div className="py-2 px-5">

<div className="grid grid-cols-3 gap-4 mt-2">

<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Matrital Status <span className='text-red-800'>*</span></label>
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

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Religion <span className='text-red-800'>*</span></label>
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
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Tribe</label>

  <Input type="text" className="mt-2" />
  </div>

  <div className="">
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Language Spoken</label>

  <Input type="text" className="mt-2" />
  </div>

  

<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Blood Group <span className='text-red-800'>*</span></label>
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

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Date of Birth <span className='text-red-800'>*</span></label>
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
  <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Place of Birth</label>

  <Input type="text" className="mt-2" />
  </div>

</div>
</div>


<hr className="mt-5 text-color-border " />







        <div className=" py-2 px-5">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Any Pysical Disability <span className='text-red-800'>*</span></label>


<div className="flex gap-10 mt-2">

    <RadioItem title='Yes' name='gender' checked={false}  />
   <RadioItem title='No' name='gender' checked={true}  />
  </div>

</div>

    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Details of Disability (If Any) </label>
        <Textarea className='mt-2' />

    <span className='text-xs text-color-gray-2'>Surname first, follow by First Name then Other name</span>
    </div>



  </CardContent>
</Card>
</div>
  )
}

export default Basic
