import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Template from '@/Layout/Template'
import { FaChevronLeft, FaChevronRight, FaEdit, FaExternalLinkAlt, FaExternalLinkSquareAlt, FaLink, FaSave, FaShare, FaTrash, FaTrashAlt, FaUpload } from 'react-icons/fa'
import { RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { RadioItem } from '@/components/RadioGroup'
import { selectStyle } from '@/components/GlobalFunction'
import Select from 'react-tailwindcss-select'
import { Checkbox } from '@/components/ui/checkbox'
import { ModalEdit } from '../Modal'

const Password = () => {
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
      <Card className="p-0 ">
    <CardContent className="p-0 pb-5">

    <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Change Password</h5>

</div>

<div className=" pt-2 pb-5 px-5  rounded-b-sm">

<div className="grid grid-cols-2 gap-4 mt-2">







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

<div className=" flex items-end justify-end mx-5 ">
    
    <Button variant={'primary'} size={'sm'} className='p-2'><FaSave/> Save</Button>
    </div>

      </CardContent>
    </Card>

    <Card className="p-0 mt-10">
    <CardContent className="p-0 pb-5">
    <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex gap-2'>
 
  <h5 className='text-base font-semibold leading-4'>Profile Pictures</h5>

</div>


<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-sm leading-1  text-red-800"> Accepts jpg, .png, .gif up to 500 kB. Recommended dimensions: 200px X 200px </label>
    
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



        
    <Card className="p-0 mt-10">
    <CardContent className="p-0 pb-5">

    <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Signatory</h5>

</div>

      <div className=" py-2 px-5">

      <label htmlFor="" className="form-title text-sm leading-1  text-red-800"> Accepts jpg, .png, .gif up to 500 kb. Recommended dimensions: 100px X 100px</label>
    
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

export default Password
