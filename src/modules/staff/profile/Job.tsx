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
import { Checkbox } from '@/components/ui/checkbox'
import { ModalEdit } from '../Modal'

const Job = () => {
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
    <div >
      
    <Card className="p-0">
    <CardContent className="p-0 pb-5">
    <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex gap-2'>
 
  <h5 className='text-base font-semibold leading-4'>Job Details</h5>

</div>


<div className="py-2 px-5">

<div className="grid grid-cols-3 gap-4 mt-2">

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Joined Date</label>

<Input type="text" className="mt-2" />
</div>

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Confirmation Date</label>

<Input type="text" className="mt-2" />
</div>

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Date of Leaving</label>

<Input type="text" className="mt-2" />
</div>






</div>



</div>

<hr className="my-2 text-color-border " />




<div className="py-2 px-5">

<div className="grid grid-cols-3 gap-4 mt-2">

<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 ">  Current Department/Unit <span className='text-red-800'>*</span></label>
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

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Employment Status</label>

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



<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 ">Job Title</label>

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


<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Access Group</label>

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



<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Work Station</label>

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


</div>


</div>



<hr className="my-2 text-color-border " />

<div className=" py-2 px-5 flex items-center gap-6 my-5 ">
 

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Add Job History  </label>

<Switch id="airplane-mod" className='' checked={true} />
</div>


<div className=" pt-2 pb-5 px-5 bg-blue-50 rounded-b-sm">

<div className="grid grid-cols-2 gap-4 mt-2">

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Job Title</label>

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

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 ">Appointment Letter</label>

 <div className='mt-2'>
    <Button variant={'white'} size={'lg'} className='w-full'>Browse</Button>
    </div>
</div>

 

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Job Start Date</label>

<Input type="date" className="mt-2" />
</div>

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Job End Date</label>

<Input type="date" className="mt-2" />
</div>


</div>


  <div className=" flex items-end justify-end mt-5 ">
    
    <Button variant={'primary'} size={'sm'} className='p-2'><FaUpload/> Upload</Button>
    </div>
</div>




<h5 className='text-sm leading-1 text-color-gray-2 mt-5 font-semibold px-5 '>All Job History </h5>
<hr className="my-2 text-color-border " />




    
    <div className='my-4 px-5'> 
        <table className="custom-table  w-full  rounded-md  ">
          <thead>
            <tr>
              <th>#</th>
              <th >SN</th>
              <th>Title</th>
              <th>Date</th>
        
              <th><div className="flex items-center gap-1"> <FaLink data-tooltip-id="table" data-tooltip-content="Present the exam key larger"/>Action</div></th>
        
          
              
        
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
              <td ><div className="cell-active ">Adeleke Monsoor Opeyemi  <ModalEdit visible={true} /></div></td>
         
            </tr>
        
        
          </tbody>
        </table>
        
        </div>
    </CardContent>
    </Card>
    </div>
  )
}

export default Job
