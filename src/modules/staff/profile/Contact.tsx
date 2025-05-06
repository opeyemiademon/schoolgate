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

const Contact = () => {
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
    <div >
      
    <Card className="p-0">
    <CardContent className="p-0 pb-5">
    <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex gap-2'>
 
  <h5 className='text-base font-semibold leading-4'>Contact Address</h5>

</div>


<h5 className='text-sm leading-1 text-color-gray-2 mt-5 font-semibold px-5 '>Permanent Address </h5>
<hr className="my-2 text-color-border " />




<div className="py-2 px-5">

<div className="grid grid-cols-3 gap-4 mt-2">

<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 ">  State <span className='text-red-800'>*</span></label>
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
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Local Government Area</label>

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
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> City</label>

<Input type="text" className="mt-2" />
</div>

<div className="col-span-2">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Street & House No</label>

<Input type="text" className="mt-2" />
</div>


</div>


<div className=" mt-4">

    <Checkbox/> <span className='text-gray-700 mt-2 text-sm'>Same as Residential Address</span>
  </div>
</div>

<h5 className='text-sm leading-1 text-color-gray-2 mt-5 font-semibold px-5 '>Resident Address </h5>
<hr className="my-2 text-color-border " />




<div className="py-2 px-5">

<div className="grid grid-cols-3 gap-4 mt-2">

<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 ">  State <span className='text-red-800'>*</span></label>
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
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Local Government Area</label>

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
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> City</label>

<Input type="text" className="mt-2" />
</div>

<div className="col-span-2">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Street & House No</label>

<Input type="text" className="mt-2" />
</div>


</div>


</div>



<h5 className='text-sm leading-1 text-color-gray-2 mt-5 font-semibold px-5 '>Telephone </h5>
<hr className="my-2 text-color-border " />




<div className="py-2 px-5">

<div className="grid grid-cols-3 gap-4 mt-2">

<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 ">  Home Phone<span className='text-red-800'>*</span></label>
<Input type="text" className="mt-2" />
</div>

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mobile Phone</label>

<Input type="text" className="mt-2" />
</div>



<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Work Phone</label>

<Input type="text" className="mt-2" />
</div>

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Other Phone</label>

<Input type="text" className="mt-2" />
</div>


</div>


</div>




<h5 className='text-sm leading-1 text-color-gray-2 mt-5 font-semibold px-5 '>Email Address </h5>
<hr className="my-2 text-color-border " />




<div className="py-2 px-5">

<div className="grid grid-cols-2 gap-4 mt-2">

<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 ">  Personal Email<span className='text-red-800'>*</span></label>
<Input type="text" className="mt-2" />
</div>

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Work Email</label>

<Input type="text" className="mt-2" />
</div>



</div>


</div>

    
    
    </CardContent>
    </Card>
    </div>
  )
}

export default Contact
