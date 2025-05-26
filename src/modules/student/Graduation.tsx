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
import { FaCodeFork } from 'react-icons/fa6'
import { ModalEdit } from './Modal'

const Graduation = () => {


    const [animal, setAnimal] = useState(null);
  const options = [
    { value: "fox", label: " Computer Science (400L)" },
    { value: "Butterfly", label: " Law (500L)" },
    { value: "Honeybee", label: " Mass Communication (500L)" }
  ];
  
   const department = [
    { value: "fox", label: " Computer Science (400L)" },
    { value: "Butterfly", label: " Law (500L)" },
    { value: "Honeybee", label: " Mass Communication (500L)" }
  ];

  const handleChange = (value:any) => {
    console.log("value:", value);
    setAnimal(value);
  };

  return (
    <Template>
    

    <div className="border-b flex justify-between items-center border-color-border w-full pr-5 bg-white">

  

    <div className='flex items-center gap-5 '>


<h2 className="flex  gap-2 items-center px-4 font-semibold leading-3"><FaCodeFork/>Promotion System</h2>
</div>

<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><RefreshCcw className='h-4'/></a> 
</div>


<div className="px-14 py-4">

<Card className="p-0">
  <CardContent className="p-0">

     <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex  flex-col gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Student Graduation System</h5>
<span className='text-sm italic'>Review and process student graduations for the academic session.</span>
</div>


   <div className=" py-2 px-5">

<div className="grid grid-cols-8">

<div className='col-span-2 flex items-center'>

<label htmlFor="" className="text-sm leading-1 text-color-gray-2 font-semibold "> Academic Session  <span className='text-red-800'>*</span></label>
</div>

<div className='col-span-6'>

  <Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                isMultiple={true}
                placeholder="Select faculty first"
                classNames={selectStyle}
            />

</div>
</div>

</div>




<div className=" py-2 px-5">

<div className="grid grid-cols-8">

<div className='col-span-2 flex items-center'>

<label htmlFor="" className="text-sm leading-1 text-color-gray-2 font-semibold "> Department  </label>
</div>

<div className='col-span-6'>

  <Select
                value={animal}
                onChange={handleChange}
                options={department}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                isMultiple={true}
                placeholder="Select faculty first"
                classNames={selectStyle}
            />

</div>
</div>

</div>


   

<div className=" py-2 px-5">

<div className="grid grid-cols-8">

<div className='col-span-2 flex items-center'>

<label htmlFor="" className="text-sm leading-1 text-color-gray-2 font-semibold "> Search Student: </label>
</div>

<div className='col-span-6'>

  <Input placeholder='Enter Student ID or Name'/>

</div>
</div>

</div>



<div className='p-3 flex items-end justify-end'>

<Button type='button' variant={'default'} size={'md'} className=''>Search Students</Button>
</div>

  </CardContent>
</Card>


    <Card className="p-0 mt-5">
    <CardContent className="p-0">
    
     <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex  flex-col gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Graduation Criteria Overview</h5>
 <span className='text-sm italic'>Eligible Students for Graduation (Computer Science - 500 Level)</span>
</div>
     
<hr className="mb-5 text-color-border " />



<div className='bg-[#e9f5ff] border border-blue-200 p-4 border-l-4 border-l-[#17a2b8] rounded-md my-6 m-4 '>

    <p className='text-color-blue text-base'><b>Selected Department:</b> Computer Science</p>
     <p className='text-color-blue text-base'><b>Final Level:</b> 500 Level</p>
         <p className='text-color-blue text-base'><b>Minimum Required Credit Units:</b> 180 Units</p>

         <p className='italic text-color-blue text-base'>(Note: Criteria may vary by department and program)</p>
</div>
    
    
    
  
    
    <div className='m-4 '> 
    <table className="custom-table  w-full  rounded-md ">
      <thead>
        <tr className='bg-color-primary text-white '>
          
          <th >SN</th>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Current Level</th>
          <th>Total Credit Units</th>
        <th>Graduation Status</th>
          <th>Action</th>
    
        </tr>
      </thead>
      <tbody>
        <tr className=" group">
         
          <td ><div className=" ">1  </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">erfggtt </div></td>
         
     <td ><div className=" ">erfggtt </div></td>
     <td ><div className=" ">185 </div></td>
          <td ><div className=" bg-red-500 w-max">Not Eligible </div></td>
      <td>
      <div>
        <Button variant={'success'} size={'sm'}>Graduate</Button>
        <Button variant={'default'} size={'sm'}>Hold</Button>
      </div>
    </td>
        </tr>
    
           <tr >
         
          <td ><div className=" ">1  </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">erfggtt </div></td>
         
     <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">178 </div></td>
    
           <td ><div className=" bg-green-500 w-max">Eligible </div></td>
      <td>
      <div>
        <Button variant={'success'} size={'sm'}>Graduate</Button>
        <Button variant={'default'} size={'sm'}>Hold</Button>
      </div>
    </td>
        </tr>
            <tr >
         
          <td ><div className=" ">1  </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">erfggtt </div></td>
         
     <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">In Elligible </div></td>
     <td ><div className=" bg-yellow-500 w-max">On Hold </div></td>
      <td>
      <div>
        <Button variant={'success'} size={'sm'}>Graduate</Button>
        <Button variant={'default'} size={'sm'}>Hold</Button>
      </div>
    </td>
         
        </tr>
       
        <tr >
         
          <td ><div className=" ">1  </div></td>
          <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">erfggtt </div></td>
         
     <td ><div className=" ">erfggtt </div></td>
          <td ><div className=" ">In Elligible </div></td>
     <td ><div className=" bg-blue-500 w-max">Graduated </div></td>
    <td>
      <div>
        <Button variant={'success'} size={'sm'}>Graduate</Button>
        <Button variant={'default'} size={'sm'}>Hold</Button>
      </div>
    </td>
         
        </tr>

      </tbody>
    </table>
    
    </div>
    
    
    
    </CardContent>
    </Card>




</div>


<div className="flex justify-between items-center bg-white border-t-2 border-t-color-border px-20 py-5 bottom-0 sticky w-full  ">

    <h2 className="text-sm font-medium">Unsaved Changes</h2>

    <div className="flex gap-3">
    <Button variant={'white'} size='md' className="">Discard</Button>

    <Button variant={'primary'} size='md' className="">Graduate All Elligible</Button>
    </div>
</div>

    </Template>
  )
}

export default Graduation
