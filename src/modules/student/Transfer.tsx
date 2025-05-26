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
import { Textarea } from '@/components/ui/textarea'

const Transfer = () => {


    const [animal, setAnimal] = useState(null);
  const options = [
    { value: "fox", label: " Increase Level" },
    { value: "Butterfly", label: " Decrease Level" },
    { value: "Honeybee", label: " Honeybee" }
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
 
 <h5 className='text-base font-semibold leading-4'>Student Change of Programme</h5>
<span className='text-sm italic'>Facilitate student transfers between academic programmes and levels.</span>
</div>


   <div className=" py-2 px-5">







 <div className="section mb-10">
            <h2 className="text-blue-700 text-xl font-semibold mb-5 border-b border-gray-200 pb-3">Student Selection</h2>
            <div className="form-group mb-4 flex items-center flex-wrap">
                <label htmlFor="studentIdSearch" className="block mb-1 font-bold w-48 flex-shrink-0 pr-4 box-border">Student ID / Name:</label>

                <Input placeholder="Enter Student ID or Name" />
<div className="flex items-end justify-end w-full">
  <Button className='mt-2 '>Search Student</Button>
</div>

            </div>

            <div className="student-details bg-gray-50 border border-gray-200 p-4 rounded-md mt-5">
                <h3 className="text-xl font-semibold text-gray-700 mb-3"> Student Details:</h3>

                <p className="mb-1"><strong className="w-32 inline-block">Student ID:</strong> <span >UNI/CS/2022/045</span></p>
                <p className="mb-1"><strong className="w-32 inline-block">Full Name:</strong> <span >Amina Sani</span></p>
                <p className="mb-1"><strong className="w-32 inline-block">Current Programme:</strong> <span >Computer Science</span></p>
                <p><strong className="w-32 inline-block">Current Level:</strong> <span>200 Level</span></p>
            </div>
        </div>

        <div className="section mb-10">
            <h2 className="text-blue-700 text-xl font-semibold mb-5 border-b border-gray-200 pb-3">New Programme Details</h2>
            <div className="form-group mb-4 flex items-center flex-wrap">
                <label htmlFor="newDepartment" className="block mb-1 font-bold w-48 flex-shrink-0 pr-4 box-border">New Department:</label>

                 <Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                isMultiple={true}
                placeholder="-- Select New Department --"
                classNames={selectStyle}
            />

            </div>
            <div className="form-group mb-4 flex items-center flex-wrap">
                <label htmlFor="newLevel" className="block mb-1 font-bold w-48 flex-shrink-0 pr-4 box-border">New Level:</label>
                <Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                isMultiple={true}
                placeholder="-- Select New Level --"
                classNames={selectStyle}
            />
            </div>
            <div className="form-group mb-4 flex items-center flex-wrap">
                <label htmlFor="reasonForChange" className="block mb-1 font-bold w-48 flex-shrink-0 pr-4 box-border">Reason for Change:</label>

                <Textarea rows={10} cols={15} placeholder="e.g., Academic performance, personal interest, medical grounds">

                </Textarea>
            </div>

            <div className="new-id-section mt-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">New Student ID Generation:</h3>
                <div className="flex items-center gap-4 flex-wrap">

                  <Button className='' variant={'success'} size={'md'} >Generate New ID</Button>
                   

                    <div className="new-id-preview bg-blue-50 border border-blue-200 border-l-4 border-l-blue-500 p-3 rounded-md flex-grow text-center">
                        <p className="m-0 text-lg font-bold text-blue-700 break-all">New ID Preview: <span id="newIdDisplay">UNI/EE/2024/0001</span></p>
                    </div>
                </div>
            </div>
        </div>

    </div>




 








   

  </CardContent>
</Card>
<hr className="mt-5 text-color-border " />






</div>


<div className="flex justify-between items-center bg-white border-t-2 border-t-color-border px-20 py-5 bottom-0 sticky w-full  ">

    <h2 className="text-base font-medium">Unsaved Changes</h2>

    <div className="flex gap-3">
    <Button variant={'white'} size='md' className="">Discard</Button>

    <Button variant={'primary'} size='md' className="">Confirm Change of Programme</Button>
    </div>
</div>
    </Template>
  )
}

export default Transfer
