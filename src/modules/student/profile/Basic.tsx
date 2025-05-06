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

const Basic = () => {
  return (
    <div>
      <h2 className="text-xl my-2">Personal Information</h2>
<Card className="p-0">
  <CardContent className="p-0">
    


  <div className="py-2 px-5">


<div className="grid grid-cols-3 gap-4 mt-2">
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

    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Nickname </label>
        <Input type="text" className="mt-2" />
        <span className='text-xs text-color-gray-2'>Usually, Alias, Popularly known As or Appelation </span>
    </div>


    <div className="py-2 px-5">


<div className="grid grid-cols-2 gap-4">
        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Passport ID</label>

        <Input type="text" className="mt-2" />
        </div>



        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> National Identity No</label>

        <Input type="text" className="mt-2" />
        </div>
        </div>

        </div>

<div className="py-2 px-5">


<div className="grid grid-cols-2 gap-4">
        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Birth Certificate No</label>

        <Input type="text" className="mt-2" />
        </div>



        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Birth Date</label>

        <Input type="text" className="mt-2" />
        </div>
        </div>

        </div>


        <div className="py-2 px-5">


<div className="grid grid-cols-2 gap-4">
        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Driver License No</label>

        <Input type="text" className="mt-2" />
        </div>



        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Genotype</label>

        <Input type="text" className="mt-2" />
        </div>
        </div>

        </div>
<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Gender <span className='text-red-800'>*</span></label>


<div className="flex gap-10 mt-2">

    <RadioItem title='Male' name='gender' checked={false}  />
   <RadioItem title='Female' name='gender' checked={true}  />
  </div>

</div>


<div className="py-2 px-5">


<div className="grid grid-cols-3 gap-4">
        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Tribe</label>

        <Input type="text" className="mt-2" />
        </div>



        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Religion</label>

        <Input type="text" className="mt-2" />
        </div>

        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Marital Status</label>

        <Input type="text" className="mt-2" />
        </div>

        </div>

        </div>

<div className="py-2 px-5">


<div className="grid grid-cols-2 gap-4">
        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Language Spoken</label>

        <Input type="text" className="mt-2" />
        </div>



        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Blood Group</label>

        <Input type="text" className="mt-2" />
        </div>
        </div>

        </div>

    


        <div className="py-2 px-5">


<div className="grid grid-cols-2 gap-4">
        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Weight</label>

        <Input type="text" className="mt-2" />
        </div>



        <div className="">
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Height</label>

        <Input type="text" className="mt-2" />
        </div>
        </div>

        </div>


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

<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Profile Picture <span className='text-red-800'>*</span></label>
    
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

export default Basic
