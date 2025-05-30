import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Template from '@/Layout/Template'
import { FaChevronLeft, FaEdit, FaLink, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { RefreshCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import Select from 'react-tailwindcss-select'
import { selectStyle } from '@/components/GlobalFunction'
import RadioGroup, { RadioItem } from '@/components/RadioGroup'
import { ModalEdit } from './Modal'
const StaffBulkRegistration = () => {


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
    <Template>
    

    <div className="border-b flex justify-between items-center border-color-border w-full  bg-white">

  

    <div className='flex items-center gap-5 '>

    <Link to='/student' className=' border-r border-color-border cursor-pointer flex items-center py-4 px-4 hover:bg-gray-100'><FaChevronLeft className='text-color-primary' /> </Link>

<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaPlus/> Bulk Student registration</h2>
</div>


 <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><RefreshCcw className='h-4'/></a> 
</div>


      <div className="px-14 py-4">
<Card className="p-0">
  <CardContent className="p-0">
  <div className="alert p-5 rounded-t-md bg-blue-50">
    
    <p className='text-sm text-color-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum quia deleniti quasi molestias voluptatibus distinctio inventore est amet, in voluptatum tempore architecto sapiente! Alias vero officia temporibus laboriosam obcaecati?</p>
  </div>



  <Card className="p-0 m-5 custom-shadow rounded-sm">
  <CardContent className="p-2">

<div className="grid grid-cols-2 gap-2">


<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Faculty <span className='text-red-800'>*</span></label>
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

<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Department <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select faculty first"
                classNames={selectStyle}
            />
</div>


<div className=" py-2 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Unit <span className='text-red-800'>*</span></label>
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

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Status <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any"
                classNames={selectStyle}
            />
</div>


</div>


</CardContent>
</Card>




<Card className="p-0 m-5 rounded-sm ">
<CardContent className="p-2 custom-shadow-sm ">

<div className='py-5 z-10'>




<div className=" my-5 overflow-scroll max-w-[calc(100vw-500px)]">

    <table className="custom-table  rounded-md w-max ">
      <thead>
        <tr className='bg-color-primary text-white hover:bg-color-primary'>
          <th className='cursor-pointer sticky left-0'>+ Add more</th>
          <th>Matric No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Other Name</th>
          <th>Last Name</th>
          <th>Other Name</th>
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Document</div></th>
    
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/>Title</div></th>
    
          <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Preview</div></th>
      
          
    
        </tr>
      </thead>
      <tbody>
        <tr className=" group">
          <td className='sticky left-0 bg-white' > <div className='flex items-center'> <FaTrashAlt  data-tooltip-id="table" data-tooltip-content="Edit Record " className="cursor-pointer text-base text-blue-800" /> </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td > <div className="">NSU/NAS/CMP/0035/16/17  </div> </td>
          <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  </div></td>
          <td ><div className=" ">Male  </div></td>
    
          <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
          <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
          <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
          <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
          
        </tr>
    
        <tr className=" group">
         
        <td  className='sticky left-0 bg-white'> <div className='flex items-center'> <FaTrashAlt  data-tooltip-id="table" data-tooltip-content="Edit Record " className="cursor-pointer text-base text-blue-800" /> </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td > <div className="">NSU/NAS/CMP/0035/16/17  </div> </td>
          <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
          <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
    
          <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
          <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
    
          <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
          <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
        </tr>
       
      </tbody>
    </table>
    
    </div>




  

</div>

</CardContent>
</Card>


  </CardContent>
</Card>
<hr className="mt-5 mb-20 text-color-border " />
</div>



<div className="flex justify-between items-center bg-white border-t-2 border-t-color-border px-20 py-5 bottom-0 sticky w-full  ">

    <h2 className="text-base font-medium">Unsaved Changes</h2>

    <div className="flex gap-3">
    <Button variant={'white'} size='md' className="">Discard</Button>

    <Button variant={'primary'} size='md' className="">Save</Button>
    </div>
</div>
    </Template>
  )
}

export default StaffBulkRegistration
