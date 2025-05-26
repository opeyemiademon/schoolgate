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

const Contact = () => {
  return (
    <div >
    <Card className="p-0">
    <CardContent className="p-0">
     <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex  flex-col gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Contact Information</h5>
<span className='text-sm italic'>Manage student contact details for the new academic session.</span>
</div>

    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Contact Address <span className='text-red-800'>*</span></label>
      <Input type="text" className="mt-2" />
    <span className='text-xs text-color-gray-2'>Surname first, follow by First Name then Other name</span>
    </div>
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Permanent Home Address <span className='text-red-800'>*</span></label>
      <Input type="text" className="mt-2" />
    <span className='text-xs text-color-gray-2'>Surname first, follow by First Name then Other name</span>
    </div>
    
    <div className="py-2 px-5">
    
    
    <div className="grid grid-cols-2 gap-4">
      <div className="">
      <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mobile</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
    
    
      <div className="">
      <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Alternate Mobile</label>
    
      <Input type="text" className="mt-2" />
      </div>
      </div>
    
      </div>
    
      <div className="py-2 px-5">
    
    
    <div className="grid grid-cols-2 gap-4">
      <div className="">
      <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> School Email Address</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
    
    
      <div className="">
      <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Personal Email Address</label>
    
      <Input type="text" className="mt-2" />
      </div>
      </div>
    
      </div>
    
    
    
    <div className="py-2 px-5">
    
    
    <div className="grid grid-cols-3 gap-4">
      <div className="">
      <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Nationality</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
    
    
      <div className="">
      <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> State of Origin</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
      <div className="">
      <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Local Government Area</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
      </div>
    
      </div>
    
    <div className="py-2 px-5">
    
    
    <div className="grid grid-cols-2 gap-4">
      <div className="">
      <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Place of Birth</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
    
    
      <div className="">
      <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> City</label>
    
      <Input type="text" className="mt-2" />
      </div>
      </div>
    
      </div>
    
      <div className=" py-2 px-5">
        
        <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Other Info </label>
            <Textarea className='mt-2' />
    
        <span className='text-xs text-color-gray-2'>Surname first, follow by First Name then Other name</span>
        </div>
    
    
    
    
    </CardContent>
    </Card>
    </div>
  )
}

export default Contact
