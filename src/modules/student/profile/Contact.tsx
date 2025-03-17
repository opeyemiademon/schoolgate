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
    <h2 className="text-xl my-2">Contact Information</h2>
    <Card className="p-0">
    <CardContent className="p-0">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Contact Address <span className='text-red-800'>*</span></label>
      <Input type="text" className="mt-2" />
    <span className='text-xs text-color-gray-2'>Surname first, follow by First Name then Other name</span>
    </div>
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Permanent Home Address <span className='text-red-800'>*</span></label>
      <Input type="text" className="mt-2" />
    <span className='text-xs text-color-gray-2'>Surname first, follow by First Name then Other name</span>
    </div>
    
    <div className="py-2 px-5">
    
    
    <div className="grid grid-cols-2 gap-4">
      <div className="">
      <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Mobile</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
    
    
      <div className="">
      <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Alternate Mobile</label>
    
      <Input type="text" className="mt-2" />
      </div>
      </div>
    
      </div>
    
      <div className="py-2 px-5">
    
    
    <div className="grid grid-cols-2 gap-4">
      <div className="">
      <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> School Email Address</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
    
    
      <div className="">
      <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Personal Email Address</label>
    
      <Input type="text" className="mt-2" />
      </div>
      </div>
    
      </div>
    
    
    
    <div className="py-2 px-5">
    
    
    <div className="grid grid-cols-3 gap-4">
      <div className="">
      <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Nationality</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
    
    
      <div className="">
      <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> State of Origin</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
      <div className="">
      <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Local Government Area</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
      </div>
    
      </div>
    
    <div className="py-2 px-5">
    
    
    <div className="grid grid-cols-2 gap-4">
      <div className="">
      <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Place of Birth</label>
    
      <Input type="text" className="mt-2" />
      </div>
    
    
    
      <div className="">
      <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> City</label>
    
      <Input type="text" className="mt-2" />
      </div>
      </div>
    
      </div>
    
      <div className=" py-2 px-5">
        
        <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Other Info </label>
            <Textarea className='mt-2' />
    
        <span className='text-xs text-color-gray-2'>Surname first, follow by First Name then Other name</span>
        </div>
    
    
    
    
    </CardContent>
    </Card>
    </div>
  )
}

export default Contact
