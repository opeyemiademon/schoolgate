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
import { ModalEdit } from '../Modal'

const File = () => {
  return (
    <div >
    <Card className="p-0">
    <CardContent className="p-0">
      <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex  flex-col gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Student Documents</h5>
<span className='text-sm italic'>Manage student document such as admission letters.</span>
</div>
    
     
    
    <div className="grid grid-cols-3 gap-4">
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Select Document <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="" />
    
    </div>
    
    
    <div className=" py-2 px-5">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> File Title <span className='text-red-800'>*</span></label>
        <Input type="text"  className="mt-2" value="" />
    
    </div>
    
    
    
    <div className=" py-2 px-5 flex flex-col mt-2">
    
    <label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Choose File  <span className='text-red-800'>*</span></label>
    
    <div className='mt-5'>
    <Button variant={'white'} size={'lg'} className='w-full'>Browse</Button>
    </div>
    </div>
    
    
    </div>
    
    
    
    
    
    <div className=" py-2 px-5">
    
    <Button variant={'primary'} size={'sm'}><FaUpload/> Upload</Button>
    </div>
    
    
    
    </CardContent>
    </Card>
    
    <hr className="mt-5 text-color-border " />
    

    <h2 className="text-blue-700 text-xl my-2">Files Uploaded</h2>
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
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Document</div></th>
    
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/>Title</div></th>
    
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Preview</div></th>
      
          
    
        </tr>
      </thead>
      <tbody>
        <tr className=" group">
          <td > <div className="flex gap-2 group"><input type="checkbox"  /> 
          
          <div className=" absolute items-center gap-2 hidden group-hover:flex bg-gray-100 ml-5">
    
            <Link to='/student/edit/8'>
          <FaTrashAlt  data-tooltip-id="table" data-tooltip-content="Edit Record " className="cursor-pointer text-sm text-blue-800" />
          </Link>
    
          </div>
           </div> </td>
          <td ><div className=" ">1  </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td > <div className="">NSU/NAS/CMP/0035/16/17  <ModalEdit visible={false}  /></div> </td>
          <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
          <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
    
    
    
          
        </tr>
    
        <tr className=" group">
          <td > <div className="flex gap-2 group"><input type="checkbox"  /> 
          
          <div className=" absolute items-center gap-2 hidden group-hover:flex bg-gray-100 ml-5">
    
            <Link to='/student/edit/8'>
          <FaTrashAlt  data-tooltip-id="table" data-tooltip-content="Edit Record " className="cursor-pointer text-sm text-blue-800" />
          </Link>
    
          </div>
           </div> </td>
          <td ><div className=" ">1  </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">erfggtt </div></td>
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

export default File
