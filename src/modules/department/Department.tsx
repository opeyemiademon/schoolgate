import { useState } from "react"
import { FaCalendar, FaCalendarAlt, FaCaretDown, FaChevronLeft, FaChevronRight, FaExpand, FaExpandAlt, FaGlobe, FaGraduationCap, FaHistory, FaLink, FaSearch, FaShare, FaSortAlphaUpAlt, FaTrash } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Tooltip } from 'react-tooltip'
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Topbar from "@/Layout/Topbar"
import Sidebar from "@/Layout/Sidebar"
import Template from "@/Layout/Template"
import { RefreshCcw, Search, Trash, X } from "lucide-react"
import { Switchsm } from "@/components/ui/switchsm"
import Select from 'react-tailwindcss-select'
import { selectStyle } from "@/components/GlobalFunction"
import { FaArrowLeftLong, FaArrowRightLong, FaX } from "react-icons/fa6"

import { Link } from "react-router-dom"
import { ImportStudent } from "../student/modal/Import"
import { ModalEdit } from "../student/Modal"

const Department = () => {
  const [animal, setAnimal] = useState(null);
const [Modal, setModal]= useState({
  field:false,
  height:false,
  filter:false,
  sort:false
})

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

<div className="border-b flex justify-between items-center border-color-border w-full py-2 px-6 bg-white">
<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaGraduationCap className="text-lg"/> Departments</h2>



<div className="flex gap-1 items-center">
<ImportStudent />

{/* <ExportStudent/> */}

<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer">Export</a>

{/* <DeleteStudent/> */}


<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><FaShare/></a>


<Link to='/student/add' className="rounded-sm   py-2  px-5 bg-color-primary text-white shadow-xs hover:bg-color-primary/80"> Add Department</Link>
</div>
</div>

<div className="px-6  border-b border-color-border bg-white">
    <ul className="flex items-center gap-4 tab">
        <li className=" active ">Records</li>
        <li className="   ">Level</li>
    </ul>
</div>



<div className="px-6 py-4 ">

<Card className="p-0   ">
  <CardContent className="p-0">
    

  <div className="px-6 pt-3 rounded-t-md border-b border-color-border bg-white">
    <ul className="flex items-center gap-4 tab">
        <li className=" active text-base">nesuer</li>
        <li className="  text-base">nesuer</li>
    </ul>
</div>

   

<div className=" py-4 px-5 flex gap-2 w-full">


    <div className="form-group-wrapper">

<div className="flex border items-center border-color-border p-2 rounded-l-md w-full border-r-0 group">
<Search className="text-color-gray-2"/>
<input type="text" className="form-group" placeholder="Search records..." />
</div>

<Button variant={'white'} size={'md'} className="rounded-r-md rounded-l-none"><RefreshCcw/> </Button>
</div>




<div className="flex">


<div className="relative group">
<Button onClick={()=>setModal({...Modal, field:!Modal.field})} variant={'white'} size={'md'} className="group rounded-r-none">Hide Fields <FaCaretDown/> </Button>


<div className={`bg-white border border-color-border z-50 rounded-md shadow-md absolute mt-2 w-[200px] -left-10  ${Modal.field?'block':'hidden'} `}>

<Input className="rounded-none h-8" placeholder="Find a field" />

<ul className="flex flex-col h-[200px] overflow-scroll ">
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Auto Increament  </li>
   

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Record ID  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Created At  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Faculty  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Department Name  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Abbreviation  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Default Level  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Program Duration  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Qualification  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Courses  </li>
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Current Student  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Status  </li>

   

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Head of Department  </li>


</ul>

<div className="border-t border-color-border py-0.5">
<Button variant={'white'} size={'sm'} className="w-1/2 rounded-r-none">Hide All</Button>
<Button variant={'white'} size={'sm'} className="w-1/2 rounded-l-none border-l-none">Show All</Button>
</div>
</div>

</div>


<div className="relative group">
<Button variant={'white'}  size={'md'} className="group border-l-none rounded-l-none rounded-r-none">Row Height <FaCaretDown/> </Button>


<div className="bg-white border border-color-border  rounded-md shadow-md absolute  w-[200px] -left-10 hidden group-hover:block ">


<ul className="flex flex-col  ">
    
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm rounded-t-md"> Short </li>
   
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm">  Medium  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm">  Tall  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm rounded-b-md">  Extra Tall </li>


   

</ul>


</div>

</div>




<div className="relative group">
<Button variant={'white'} onClick={()=>setModal({...Modal, sort:!Modal.sort})} size={'md'} className="group border-l-none rounded-l-none">Sort <FaCaretDown/> </Button>



<div className={`bg-white border border-color-border  rounded-md shadow-md h-max  mt-2 w-[500px] right-1   py-2 px-4  absolute z-30  max-h-[300px]  ${Modal.sort?'block':'hidden'} `}>




<div className="flex gap-2 my-2  items-center justify-between ">


  <div className="flex items-center gap-2">
    
    <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer flex items-center gap-2"><FaX className="font-semibold text-color-gray-2"/> </a>
    <span className="text-sm text-color-gray-2">then by</span>
    <select className="text-sm hover:bg-color-primary-light hover:text-color-primary py-2 px-4 rounded-sm text-color-gray-2 cursor-pointer flex items-center">
    <option value="">Student Capacity</option>
      <option value="">Auto Increment</option>
      <option value="">Course Name</option>
      <option value="">Course Details</option>
      
    </select>
  </div>




<div className="flex  gap-2 w-[195px] items-center">

<span className="text-sm text-color-gray-2 ">from </span>


<div className="flex items-between bg-color-border rounded p-1 gap-2 w-full">


  <div className="flex bg-[#666666] justify-center items-center gap-2 w-1/2  py-1 rounded cursor-pointer">
    <h2 className=" text-white text-sm">A </h2> 
    <FaArrowRightLong className=" text-white text-sm"/>
    <h2 className=" text-white text-sm">
    B</h2>
  </div>

  <div className="flex w-1/2  justify-center items-center gap-2   py-1 rounded cursor-pointer">
    <h2 className=" ">Z </h2> 
    <FaArrowRightLong className=" "/>
    <h2 className=" ">
    A</h2>
  </div>
</div>

</div>
         

</div>


<div className="flex gap-2 my-2  items-center justify-between ">


  <div className="flex items-center gap-2 ">
    
    <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer flex items-center gap-2"><FaX className="font-semibold text-color-gray-2"/> </a>
    <span className="text-sm text-color-gray-2">then by</span>


    <select className="text-sm hover:bg-color-primary-light hover:text-color-primary py-2 px-4 rounded-sm text-color-gray-2 cursor-pointer flex items-center">
      <option value="">Auto Increment</option>
      <option value="">Course Name</option>
      <option value="">Course Details</option>
      
    </select>
  </div>




<div className="flex  gap-2 w-[195px] items-center">

<span className="text-sm text-color-gray-2 ">from </span>


<div className="flex items-between bg-color-border rounded p-1 gap-2 w-full">


  <div className="flex bg-[#666666] justify-center items-center gap-2 w-1/2  py-1 rounded cursor-pointer">
    <h2 className=" text-white text-sm">A </h2> 
    <FaArrowRightLong className=" text-white text-sm"/>
    <h2 className=" text-white text-sm">
    B</h2>
  </div>

  <div className="flex w-1/2  justify-center items-center gap-2   py-1 rounded cursor-pointer">
    <h2 className=" ">Z </h2> 
    <FaArrowRightLong className=" "/>
    <h2 className=" ">
    A</h2>
  </div>
</div>

</div>
         

</div>



<div className="flex items-center justify-between mt-4">



<select className="text-sm hover:bg-color-primary-light hover:text-color-primary py-2 px-4 rounded-sm text-color-gray-2 cursor-pointer flex items-center">
      <option value="" disabled selected>Pick another filed to sort by</option>
      <option value="">Course Name</option>
      <option value="">Course Details</option>
      
    </select>

<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-2 px-4 rounded-sm cursor-pointer text-color-gray-2">Apply</a>
</div>
</div>

</div>
</div>


<Button variant={'white'} size={'sm'} disabled>10 Records</Button>


<div className="flex flex-row">
<Button variant={'white'} size={'sm'} className=" border-l-none rounded-r-none"><FaChevronLeft /></Button>
<Button variant={'white'} size={'sm'} className="hover:bg-transparent cursor-default rounded-none">1 of 2</Button>
<Button variant={'white'} size={'sm'} className=" border-r-none rounded-l-none"><FaChevronRight /></Button>
</div>
    </div>


 

 <div className=" px-5 flex items-center gap-2 flex-wrap my-2">


 <div className="flex items-center border border-color-border rounded  w-max">
<span className="text-sm ml-2 text-color-gray-2">Record ID is 234 </span>
  <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer flex items-center gap-2"><FaX className="font-semibold text-color-gray-2"/> </a>
  </div>


  <div className="flex items-center border border-color-border rounded  w-max">
<span className="text-sm ml-2 text-color-gray-2">Course Name contains opinion </span>
  <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer flex items-center gap-2"><FaX className="font-semibold text-color-gray-2"/> </a>
  </div>


  <div className="flex items-center border border-color-border rounded  w-max">
<span className="text-sm ml-2 text-color-gray-2">Enrollments sort by ascending </span>
  <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer flex items-center gap-2"><FaX className="font-semibold text-color-gray-2"/> </a>
  </div>
<div className="flex items-center border border-color-border rounded  w-max">
<span className="text-sm ml-2 text-color-gray-2">Instructor is blank </span>
  <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer flex items-center gap-2"><FaX className="font-semibold text-color-gray-2"/> </a>
  </div>



  <div className="flex items-center border border-color-border rounded  w-max">
<span className="text-sm ml-2 text-color-gray-2">Course Name contains opinion </span>
  <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer flex items-center gap-2"><FaX className="font-semibold text-color-gray-2"/> </a>
  </div>

  <div className="flex items-center border border-color-border rounded  w-max">
<span className="text-sm ml-2 text-color-gray-2">Student Capacity sort by descending </span>
  <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer flex items-center gap-2"><FaX className="font-semibold text-color-gray-2"/> </a>
  </div>


  <div className="flex items-center border border-color-border rounded  w-max">
<span className="text-sm ml-2 text-color-gray-2">Course Name contains opinion </span>
  <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer flex items-center gap-2"><FaX className="font-semibold text-color-gray-2"/> </a>
  </div>


  <div className="flex items-center border border-color-border rounded  w-max">
<span className="text-sm ml-2 text-color-gray-2">Course Name contains opinion </span>
  <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer flex items-center gap-2"><FaX className="font-semibold text-color-gray-2"/> </a>
  </div>


 </div>



 <div className=" px-5 flex items-center gap-2  my-2">

 <Button variant={'white'} size={'sm'}>Rename View</Button>
<Button variant={'white'} size={'sm'}>Save View</Button>
<Button variant={'white'} size={'sm'} disabled>Clear</Button>
</div>

    




<div className=" my-10 overflow-scroll max-w-[calc(100vw-370px)]">
<div className="mx-2">


<div className="flex flex-row">
<Button variant={'white'} size={'md'} className=" border-l-none rounded-r-none">    <input type="checkbox"  />  2 Selected</Button>

<Button variant={'white'} size={'md'} className=" rounded-none">Update</Button>

<Button variant={'white'} size={'md'} className=" border-r-none rounded-l-none">Delete</Button>
</div>

</div>

<Tooltip id="table" className='z-50' />

{/* w-max or w-screen or w-full */}
<table className="custom-table w-max  ">
  <thead>
    <tr>
      <th>#</th>
      <th >SN</th>
      <th>Record ID</th>
      <th>Date Added</th>
      <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Faculty</div></th>

      <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Department Name</div></th>

      <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Abbreviation</div></th>

      <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Default Level</div></th>   
      
      <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Program Duration</div></th>


      <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Qualification</div></th>

      <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Courses</div></th>


      <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Current Student</div></th>


      <th>Head of Department</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr className=" group">
      <td > <div className="flex gap-2 group">
        <input type="checkbox"  /> 
      
      <div className=" absolute items-center gap-2 hidden group-hover:flex bg-gray-100 ml-5">

        <Link to='/student/edit/8'>
      <FaExpandAlt  data-tooltip-id="table" data-tooltip-content="Edit Record " className="cursor-pointer text-base text-blue-800" />
      </Link>

      <FaHistory  data-tooltip-id="table" data-tooltip-content="Record history" className="cursor-pointer text-base text-blue-800" />
      </div>
       </div> </td>
      <td ><div className=" ">1  </div></td>
      <td ><div className=" ">erfggtt </div></td>
      <td ><div className=" ">erfggtt </div></td>
      <td > <div className=" ">22-03-2025  </div></td>
      <td > <div className="">NSU/NAS/CMP/0035/16/17  <ModalEdit visible={false}  /></div> </td>
      <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
      <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">Social Science   <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">Social Science   <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">Social Science   <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">200   <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">DE   <ModalEdit visible={false} /></div></td>
      <td ><div className=" "><div className="p-1 px-2 text-white text-sm bg-[#26C836] rounded-full w-max"> Active </div>   <ModalEdit visible={false} /></div>  </td>

    </tr>

    <tr className=" group">
      <td > <div className="flex gap-2 group"><input type="checkbox"  /> 
      
      <div className=" absolute items-center gap-2 hidden group-hover:flex bg-gray-100 ml-5">
      <FaExpandAlt  data-tooltip-id="table" data-tooltip-content="Edit Record " className="cursor-pointer text-base text-blue-800" />
      <FaHistory  data-tooltip-id="table" data-tooltip-content="Record history" className="cursor-pointer text-base text-blue-800" />
      </div>
       </div> </td>
       
         <td ><div className=" ">1  </div></td>
      <td ><div className=" ">erfggtt </div></td>
      <td ><div className=" ">erfggtt </div></td>
      <td > <div className=" ">22-03-2025  </div></td>
      <td > <div >NSU/NAS/CMP/0035/16/17  <ModalEdit visible={false}  /></div> </td>
      <td ><div className=" ">Adeleke Monsoor Opeyemi  <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">Social Science   <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">Social Science   <ModalEdit visible={false} /></div></td>
      <td ><div className=" cell-active">Social Science   <ModalEdit visible={true} /></div></td>
      <td ><div className=" ">200   <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">DE   <ModalEdit visible={false} /></div></td>
      <td ><div className=" "><div className="p-1 px-2 text-white text-sm bg-[#26C836] rounded-full w-max"> Active </div>   <ModalEdit visible={false} /></div>  </td>

    </tr>
    <tr className=" group">
      <td > <div className="flex gap-2 group"><input type="checkbox"  /> 
      <div className=" absolute items-center gap-2 hidden group-hover:flex bg-gray-100 ml-5">
      <FaExpandAlt  data-tooltip-id="table" data-tooltip-content="Edit Record " className="cursor-pointer text-base text-blue-800" />
      <FaHistory  data-tooltip-id="table" data-tooltip-content="Record history" className="cursor-pointer text-base text-blue-800" />
      </div>
       </div> </td><td ><div className=" ">1  </div></td>
      <td ><div className=" ">erfggtt </div></td>
      <td ><div className=" ">erfggtt </div></td>
      <td > <div className=" ">22-03-2025  </div></td>
      <td > <div className="cell-active">NSU/NAS/CMP/0035/16/17  <ModalEdit visible={true}  /></div> </td>
      <td ><div className=" ">Adeleke Monsoor Opeyemi  <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">Male  <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">Social Science   <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">Social Science   <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">Social Science   <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">200   <ModalEdit visible={false} /></div></td>
      <td ><div className=" ">DE   <ModalEdit visible={false} /></div></td>
      <td ><div className=" "><div className="p-1 px-2 text-white text-sm bg-[#26C836] rounded-full w-max"> Active </div>   <ModalEdit visible={false} /></div>  </td>

    </tr>
  </tbody>
</table>

</div>
  </CardContent>
</Card>
<hr className="mt-5 text-color-border " />
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

export default Department
