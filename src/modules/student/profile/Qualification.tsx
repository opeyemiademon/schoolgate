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
import { ModalEdit } from '../Modal'

const Qualification = () => {
  return (
    <div >
    <h2 className="text-xl my-2">Educational Qualification</h2>
    <Card className="p-0">
    <CardContent className="p-0">
    
    
     
    
    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Name of Institution <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="" />
    
    </div>
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Program <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="" />
    
    </div>
    
    
    
    
    
    </div>
    
    
    
    
    <div className="grid grid-cols-2 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Grade/Award <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="" />
    
    </div>
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Month and Year of Graduation <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="" />
    
    </div>
    
    
    </div>
    
    
    <div className=" py-2 px-5">
    
    <Button variant={'success'} size={'sm'}><FaSave/> Add Item</Button>
    </div>
    
    
    
    </CardContent>
    </Card>
    
    <hr className="mt-5 text-color-border " />
    
    <h2 className="text-xl my-2">Qualification Records</h2>
    <Card className="p-0">
    <CardContent className="p-0">
    
    
     
    
    
    
    <div className="m-2">
    
    
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
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Name of Institution</div></th>
    
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/>Program</div></th>
    
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Grade/Award</div></th>
    
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Month/Year</div></th>   
          
    
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
          <td > <div className="">NSU/NAS/CMP/0035/16/17  <ModalEdit visible={false}  /></div> </td>
          <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
          <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
    
    
    
          
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
          <td > <div className="">NSU/NAS/CMP/0035/16/17  <ModalEdit visible={false}  /></div> </td>
          <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
          <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
    
    
    
          
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
          <td > <div className="">NSU/NAS/CMP/0035/16/17  <ModalEdit visible={false}  /></div> </td>
          <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
          <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
        
    
    
          
        </tr>
      </tbody>
    </table>
    
    </div>
    
    
    
    </CardContent>
    </Card>
    
    </div>
  )
}

export default Qualification
