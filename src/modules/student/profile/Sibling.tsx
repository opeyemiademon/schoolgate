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

const Sibling = () => {
  return (
    <div >
    <h2 className="text-xl my-2">Sibling Information</h2>
    <Card className="p-0">
    <CardContent className="p-0">
    
    
     
    
    
    
    <div className="alert p-5 rounded-t-md bg-blue-50">
    
      <p className='text-sm text-color-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum quia deleniti quasi molestias voluptatibus distinctio inventore est amet, in voluptatum tempore architecto sapiente! Alias vero officia temporibus laboriosam obcaecati?</p>
    </div>
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Enter Matric Number <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="" />
        <span className='text-xs text-color-gray-2'>An invitation will be sent to the student, once accepted, such student will appear as sibling </span>
    </div>
    
    
    
    
    
    
    
    
    
    
    <div className=" py-2 px-5">
    
    <Button variant={'primary'} size={'sm'}><FaSave/> Send Request</Button>
    </div>
    
    
    
    </CardContent>
    </Card>
    
    <hr className="mt-5 text-color-border " />
    
    <h2 className="text-xl my-2">Sibling Records</h2>
    <Card className="p-0">
    <CardContent className="p-0">
    
    
     
    <div className="px-6 pt-3 rounded-t-md border-b border-color-border bg-white">
        <ul className="flex items-center gap-4 tab">
    
        <li  className=" active ">Successful</li>
        <li  className="  ">Pending Request (3)</li>
        </ul>
    </div>
    
    
    <div className="m-2 pt-3">
    
    
    <div className="flex flex-row">
    <Button variant={'white'} size={'md'} className=" border-l-none rounded-r-none">    <input type="checkbox"  />  2 Selected</Button>
    
    <Button variant={'white'} size={'md'} className=" rounded-none">Update</Button>
    
    <Button variant={'white'} size={'md'} className=" border-r-none rounded-l-none">Delete</Button>
    </div>
    
    </div>
    
    <div className='my-4'> 
    <table className="custom-table  w-full  rounded-md  ">
      <thead>
        <tr>
          <th>#</th>
          <th >SN</th>
          <th>Record ID</th>
          <th>Date Added</th>
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Sibling Name</div></th>
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Matric Number</div></th>
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/>Department</div></th>
    
      
    
        
          
    
        </tr>
      </thead>
      <tbody>
        <tr className=" group">
          <td > <div className="flex gap-2 group"><input type="checkbox"  /> 
          
          <div className=" absolute items-center gap-2 hidden group-hover:flex bg-gray-100 ml-5">
    
            <Link to='/student/edit/8'>
          <FaTrashAlt  data-tooltip-id="table" data-tooltip-content="Edit Record " className="cursor-pointer text-base text-blue-800" />
          </Link>
    
          </div>
           </div> </td>
          <td ><div className=" ">1  </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td > <div className=" ">22-03-2025  </div></td>
          <td > <div className="">NSU/NAS/CMP/0035/16/17  </div> </td>
         
          <td ><div className=" ">Male  </div></td>
    
    
    
          
        </tr>
    
        <tr className=" group">
          <td > <div className="flex gap-2 group"><input type="checkbox"  /> 
          
          <div className=" absolute items-center gap-2 hidden group-hover:flex bg-gray-100 ml-5">
    
            <Link to='/student/edit/8'>
          <FaTrashAlt  data-tooltip-id="table" data-tooltip-content="Edit Record " className="cursor-pointer text-base text-blue-800" />
          </Link>
    
          </div>
           </div> </td>
          <td ><div className=" ">1  </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td > <div className=" ">22-03-2025  </div></td>
          <td > <div className="">NSU/NAS/CMP/0035/16/17  </div> </td>
         
         <td ><div className=" ">Male  </div></td>
    
    
          
        </tr>
        <tr className=" group">
          <td > <div className="flex gap-2 group"><input type="checkbox"  /> 
          
          <div className=" absolute items-center gap-2 hidden group-hover:flex bg-gray-100 ml-5">
    
            <Link to='/student/edit/8'>
          <FaTrashAlt  data-tooltip-id="table" data-tooltip-content="Edit Record " className="cursor-pointer text-base text-blue-800" />
          </Link>
    
          </div>
           </div> </td>
          <td ><div className=" ">1  </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td > <div className=" ">22-03-2025  </div></td>
          <td > <div className="">NSU/NAS/CMP/0035/16/17  </div> </td>
         
         <td ><div className=" ">Male  </div></td>
    
    
          
        </tr>
      </tbody>
    </table>
    
    </div>
    
    
    
    </CardContent>
    </Card>
    
    </div>
  )
}

export default Sibling
