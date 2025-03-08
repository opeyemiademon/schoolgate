import { useState } from "react"
import { FaCalendar, FaCalendarAlt, FaCaretDown, FaGlobe, FaLink, FaSearch, FaShare, FaSortAlphaUpAlt, FaTrash } from "react-icons/fa"
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

const Students = () => {
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
<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaCalendarAlt/> Courses</h2>



<div className="flex gap-1 items-center">
<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer">Import</a>

<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer">Export</a>


<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer">Batch Operations</a>

<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><FaTrash/></a>


<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><FaShare/></a>



<Button variant={'primary'} size={'md'}>Add New Course</Button>
</div>
</div>

<div className="px-6  border-b border-color-border bg-white">
    <ul className="flex items-center gap-4 tab">
        <li className=" active ">Records</li>
        <li className="   ">Fields</li>
        <li className="   ">Connections</li>
        <li className="   ">Rules</li>
        <li className="   ">Settings</li>
    </ul>
</div>



<div className="px-6 py-4">

<Card className="p-0">
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


<div className={`bg-white border border-color-border  rounded-md shadow-md absolute mt-2 w-[200px] -left-10  ${Modal.field?'block':'hidden'} `}>

<Input className="rounded-none h-8" placeholder="Find a field" />

<ul className="flex flex-col h-[200px] overflow-scroll ">
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Auto Increament  </li>
   

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Record ID  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Created At  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Course Name  </li>


    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Course Details  </li>
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Student Capacity  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Status  </li>

   

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Instructor  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Enrollments  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-1 hover:bg-gray-300 cursor-pointer text-sm">  <Switchsm id="airplane-mod"  /> Average Grade  </li>

</ul>

<div className="border-t border-color-border py-0.5">
<Button variant={'white'} size={'sm'} className="w-1/2 rounded-r-none">Hide All</Button>
<Button variant={'white'} size={'sm'} className="w-1/2 rounded-l-none border-l-none">Show All</Button>
</div>
</div>

</div>


<div className="relative group">
<Button variant={'white'}  size={'md'} className="group border-l-none rounded-l-none rounded-r-none">Row Height <FaCaretDown/> </Button>


<div className="bg-white border border-color-border  rounded-md shadow-md absolute mt-2 w-[200px] -left-10 hidden group-hover:block ">


<ul className="flex flex-col  ">
    
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm"> Short </li>
   
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm">  Medium  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm">  Tall  </li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer text-sm">  Extra Tall </li>


   

</ul>


</div>

</div>


<div className="relative group">
<Button variant={'white'} onClick={()=>setModal({...Modal, filter:!Modal.filter})} size={'md'} className="group  rounded-l-none rounded-r-none ">Filter (6) <FaCaretDown/> </Button>



<div className={`bg-white border border-color-border  rounded-md shadow-md h-max  mt-2 w-[600px] right-5   py-2 px-4  absolute z-30  max-h-[300px]  ${Modal.filter?'block':'hidden'} `}>




<div className="flex gap-2 my-1  ">

<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any field"
                classNames={selectStyle}
            />

<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any field"
                classNames={selectStyle}
            />

<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any field"
                classNames={selectStyle}
            />

            <Button variant={'white'} size={'sm'}><Trash/></Button>

</div>

<div className="flex gap-2 my-1  ">

<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any field"
                classNames={selectStyle}
            />

<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any field"
                classNames={selectStyle}
            />

<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any field"
                classNames={selectStyle}
            />

            <Button variant={'white'} size={'sm'}><Trash/></Button>

</div>


<div className="flex gap-2 my-1  ">

<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any field"
                classNames={selectStyle}
            />

<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any field"
                classNames={selectStyle}
            />

            <Button variant={'white'} size={'sm'}><Trash/></Button>

</div>


<div className="flex gap-2 my-1  ">

<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any field"
                classNames={selectStyle}
            />


<Input />
            <Button variant={'white'} size={'sm'}><Trash/></Button>

</div>


<div className="flex gap-2 my-1  ">

<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select any field"
                classNames={selectStyle}
            />



            <Button variant={'white'} size={'sm'}><Trash/></Button>

</div>





<div className="flex items-center justify-between mt-4">
<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-2 px-4 rounded-sm cursor-pointer">Add Filter</a>
<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-2 px-4 rounded-sm cursor-pointer">Apply</a>
</div>
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

    




<div className="px-5 my-3">


<Tooltip id="table" className='z-50' />

<table className="table">
  <thead>
    <tr>
      <td>#</td>
      <td>Record ID</td>
      <td>Created At</td>
      <td>Course Name</td>
      <td>Course Details</td>
      <td>Student Capacity</td>
      <td>Status</td>

      <td> <div className="flex items-center"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/> Instructor</div></td>

      <td>Enrollments</td>
      <td>Average Grade</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox"  /> </td>
      <td>67uhdtg</td>
      <td>Social Science</td>
      <td>12/08/2025 07:39 AM</td>
      <td>Social science entails</td>
      <td>89.00</td>
      <td> <div className="p-1 px-2 text-white text-sm bg-[#26C836] rounded-full w-max"> Active </div> </td>

      <td> Onboarding Instructors</td>
      <td>2</td>
      <td>80</td>
    </tr>
  </tbody>
</table>

</div>
  </CardContent>
</Card>
<hr className="mt-5 text-color-border " />
</div>




<div className="flex justify-between items-center bg-white border-t-2 border-t-color-border px-20 py-5 bottom-0 absolute w-full ">

    <h2 className="text-base font-medium">Unsaved Changes</h2>

    <div className="flex gap-3">
    <Button variant={'white'} size='md' className="">Discard</Button>

    <Button variant={'primary'} size='md' className="">Save</Button>
    </div>
</div>

</Template>
  )
}

export default Students
