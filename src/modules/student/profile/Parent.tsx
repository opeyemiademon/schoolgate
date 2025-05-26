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

const Parent = () => {

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
    <CardContent className="p-0">
    
     <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex  flex-col gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Parent Details</h5>
<span className='text-sm italic'>Manage student parent information for the new academic session.</span>
</div>
     
     <h2 className="text-blue-700 text-xl m-2 font-semibold mb-5 border-b border-gray-200 pb-3">Father Information</h2>

    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Father Name <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Father Phone <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    
    
    
    
    </div>
    
    
    
    
    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Father Email <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Father Occupation <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    </div>
    <div className="grid grid-cols-2 gap-4">
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Father Qualification <span className='text-red-800'>*</span></label>
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
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Father Organization <span className='text-red-800'>*</span></label>
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
    
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Father Photo</label>
    
    <div className='flex items-center gap-2 w-full'>
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center  flex flex-col   hover:border-border group '>
    
    
    <div className='h-28 m-2 w-28'>
         <img src="/images/ope.png" alt="photo" className='rounded-full w-full h-full ' />
         </div>
    
         <div className='flex border-t-2 border-border/70 items-center'>
    
    <span className='text-color-gray-2 text-sm px-1'>imageonlin...</span>
    
    <div className='p-1 border-l-2 border-border/70'><FaExternalLinkAlt className='text-sm text-color-gray-2 hover:text-sm hover:text-color-primary cursor-pointer'/></div>
    <div className='p-1 border-l-2 border-border/70'><FaTrashAlt className='text-sm text-color-gray-2 hover:text-sm hover:text-color-primary cursor-pointer'/></div>
    </div>
    
        </div>
    
        
    
    
    
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center w-full h-38 flex  cursor-pointer hover:border-border group'>
    
          <span className='text-sm text-color-gray-2/70 group-hover:text-color-gray-2'>DROP FILES HERE TO UPLOAD</span>
        </div>
        </div>
    
    
    </div>
    
    
    
    </CardContent>
    </Card>
    
    <Card className="p-0 mt-5">
    <CardContent className="p-0">
    
      <h2 className="text-blue-700 text-xl m-2 font-semibold mb-5 border-b border-gray-200 pb-3">Mother Information</h2>
     
    
    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Name <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Phone <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    
    
    
    
    </div>
    
    
    
    
    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Email <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Occupation <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    </div>
    <div className="grid grid-cols-2 gap-4">
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Qualification <span className='text-red-800'>*</span></label>
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
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Organization <span className='text-red-800'>*</span></label>
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
    
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mother Photo</label>
    
    <div className='flex items-center gap-2 w-full'>
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center  flex flex-col   hover:border-border group '>
    
    
    <div className='h-28 m-2 w-28'>
         <img src="/images/ope.png" alt="photo" className='rounded-full w-full h-full ' />
         </div>
    
         <div className='flex border-t-2 border-border/70 items-center'>
    
    <span className='text-color-gray-2 text-sm px-1'>imageonlin...</span>
    
    <div className='p-1 border-l-2 border-border/70'><FaExternalLinkAlt className='text-sm text-color-gray-2 hover:text-sm hover:text-color-primary cursor-pointer'/></div>
    <div className='p-1 border-l-2 border-border/70'><FaTrashAlt className='text-sm text-color-gray-2 hover:text-sm hover:text-color-primary cursor-pointer'/></div>
    </div>
    
        </div>
    
        
    
    
    
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center w-full h-38 flex  cursor-pointer hover:border-border group'>
    
          <span className='text-sm text-color-gray-2/70 group-hover:text-color-gray-2'>DROP FILES HERE TO UPLOAD</span>
        </div>
        </div>
    
    
    </div>
    
    
    
    </CardContent>
    </Card>
    
    <Card className="p-0 mt-5">
    <CardContent className="p-0">
    
       <h2 className="text-blue-700 text-xl m-2 font-semibold mb-5 border-b border-gray-200 pb-3">Gaurdian Information</h2>
     
    
    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Name <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Phone <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    
    
    
    
    </div>
    
    
    
    
    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Email <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Occupation <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="FT23POL0123" />
    
    </div>
    
    </div>
    <div className="grid grid-cols-2 gap-4">
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Qualification <span className='text-red-800'>*</span></label>
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
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Organization <span className='text-red-800'>*</span></label>
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
    
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Guardian Photo</label>
    
    <div className='flex items-center gap-2 w-full'>
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center  flex flex-col   hover:border-border group '>
    
    
    <div className='h-28 m-2 w-28'>
         <img src="/images/ope.png" alt="photo" className='rounded-full w-full h-full ' />
         </div>
    
         <div className='flex border-t-2 border-border/70 items-center'>
    
    <span className='text-color-gray-2 text-sm px-1'>imageonlin...</span>
    
    <div className='p-1 border-l-2 border-border/70'><FaExternalLinkAlt className='text-sm text-color-gray-2 hover:text-sm hover:text-color-primary cursor-pointer'/></div>
    <div className='p-1 border-l-2 border-border/70'><FaTrashAlt className='text-sm text-color-gray-2 hover:text-sm hover:text-color-primary cursor-pointer'/></div>
    </div>
    
        </div>
    
        
    
    
    
    
    <div className='border-2 rounded-sm border-border/70 items-center justify-center w-full h-38 flex  cursor-pointer hover:border-border group'>
    
          <span className='text-sm text-color-gray-2/70 group-hover:text-color-gray-2'>DROP FILES HERE TO UPLOAD</span>
        </div>
        </div>
    
    
    </div>
    
    
    
    </CardContent>
    </Card>
    </div>
  )
}

export default Parent
