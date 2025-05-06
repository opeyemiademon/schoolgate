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
import { EmergencyModal } from '../modal/Emergency'
import { VisaModal } from '../modal/Visa'
import { EducationModal } from '../modal/Education'

const Education = () => {
  return (
    <div >
  
    
    <Card className="p-0">
    <CardContent className="p-0">
    <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Education History</h5>

</div>
    
     
    
    
    <div className="m-2 flex justify-between">
    
    
    <div className="flex flex-row">
    <Button variant={'white'} size={'sm'} className=" border-l-none rounded-r-none">    <input type="checkbox"  />  2 Selected</Button>
    
    <Button variant={'white'} size={'sm'} className=" rounded-none">Update</Button>
    
    <Button variant={'white'} size={'sm'} className=" border-r-none rounded-l-none">Delete</Button>
    
    </div>
    <EducationModal/>
    </div>
    
    <div className=" my-4 overflow-scroll max-w-[calc(100vw-370px)]">

    <table className="custom-table  w-max  rounded-md  ">
      <thead>
        <tr>
          <th>#</th>
          <th >SN</th>
          <th>Certificate</th>
          <th>Institution</th>
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Grade</div></th>
    
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/>Year Start</div></th>
    
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Year End</div></th>
      
    
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
          <td > <div className="">NSU/NAS/CMP/0035/16/17  <ModalEdit visible={false}  /></div> </td>
          <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
          <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
          <td ><div className=" ">erfggtt </div></td>
          
        </tr>
       
      </tbody>
    </table>
    
    </div>
    
    
    
    </CardContent>
    </Card>
    
    </div>
  )
}

export default Education
