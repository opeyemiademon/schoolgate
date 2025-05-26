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

const ChangePassword = () => {


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


<h2 className="flex  gap-2 items-center px-4 font-semibold leading-3"><FaCodeFork/>Change Student Password</h2>
</div>

<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><RefreshCcw className='h-4'/></a> 
</div>


<div className="px-14 py-4">

<Card className="p-0">
  <CardContent className="p-0">

     <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex  flex-col gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Change Student Password</h5>
<span className='text-sm italic'>Securely reset or update student login credentials.</span>
</div>


   <div className=" py-2 px-5">




<div className="section my-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h2 className="text-blue-700 text-2xl font-semibold mb-4 border-b border-blue-100 pb-2">Student Lookup</h2>

            <div className="form-group mb-4 flex flex-col md:flex-row items-center md:items-start gap-3">
                <label htmlFor="studentIdSearch" className="block mb-2 md:mb-0 font-bold w-full md:w-48 flex-shrink-0 md:pr-4">Student ID / Name:</label>

                <Input placeholder="Enter Student ID or Name" className='bg-white'/>

              
                <Button>Search Student</Button>
            </div>

            <div className="student-details bg-white border border-gray-200 p-4 rounded-md mt-5 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Loaded Student Details:</h3>
                <p className="mb-1"><strong className="w-32 inline-block">Student ID:</strong> <span id="displayStudentId">UNI/CS/2022/045</span></p>
                <p className="mb-1"><strong className="w-32 inline-block">Full Name:</strong> <span id="displayStudentName">Amina Sani</span></p>
                <p><strong className="w-32 inline-block">Current Status:</strong> <span id="displayStudentStatus" className="text-green-600 font-semibold">Active</span></p>
            </div>
        </div>

        <div className="section mb-10 p-6 bg-red-50 border border-red-200 rounded-lg">
            <h2 className="text-red-700 text-2xl font-semibold mb-4 border-b border-red-100 pb-2">Password Reset</h2>
            <p className="text-sm text-red-600 mb-4">
                <span className="font-bold">Important:</span> Changing a password will immediately update the student's login credentials. Ensure proper verification.
            </p>
            <div className="form-group mb-4 flex flex-col md:flex-row items-center md:items-start">
                <label htmlFor="newPassword" className="block mb-2 md:mb-0 font-bold w-full md:w-48 flex-shrink-0 md:pr-4">New Password:</label>

                  <Input placeholder="Enter new password" type='password' className='bg-white' />

            </div>
            <div className="form-group mb-4 flex flex-col md:flex-row items-center md:items-start">
                <label htmlFor="confirmNewPassword" className="block mb-2 md:mb-0 font-bold w-full md:w-48 flex-shrink-0 md:pr-4">Confirm Password:</label>

                 <Input placeholder="Confirm new password" type='password' className='bg-white' />



                   </div>
            <div className="form-group mb-4 flex flex-col md:flex-row items-center md:items-start">
                <label htmlFor="adminReason" className="block mb-2 md:mb-0 font-bold w-full md:w-48 flex-shrink-0 md:pr-4">Reason for Change (Admin):</label>

                <Textarea className='bg-white' placeholder="e.g., Student request, security reset">

                </Textarea>
            </div>
            <div className="text-center mt-6">

              <Button variant={'success'} size={'md'}>Generate Strong Password</Button>
              
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

    <Button variant={'primary'} size='md' className="">Change Password</Button>
    </div>
</div>
    </Template>
  )
}

export default ChangePassword
