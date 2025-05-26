import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Template from './Layout/Template'
import { FaChevronLeft, FaEdit, FaLink, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { RefreshCcw, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import Select from 'react-tailwindcss-select'
import { selectStyle } from '@/components/GlobalFunction'
import RadioGroup, { RadioItem } from '@/components/RadioGroup'
import Label from '@/components/Label'

const CourseRegistration = () => {


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
    

    <div className="border-b flex justify-between items-center border-color-border w-full pr-5 bg-white">

  

    <div className='flex items-center gap-5 '>

    <Link to='/courses' className=' border-r border-color-border cursor-pointer flex items-center py-4 px-4 hover:bg-gray-100'><FaChevronLeft className='text-color-primary' /> </Link>

<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaPlus/> Register Courses</h2>
</div>

<RefreshCcw/>
</div>


<div className="px-14 py-4">

<Card className="p-0">
  <CardContent className="px-0 ">
    <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex  flex-col gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Course Registration</h5>
<span className='text-sm italic'>Register courses for multiple students, including carry-over courses.</span>
</div>




<form className='py-2 px-5'>

  <div className="grid grid-cols-2 gap-4 ">


<div className="">

<Label title="Select Department" is_reqired={false} />
  
          <Select
                value={animal}
                onChange={handleChange}
                options={options}
   
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="--Select--"
                classNames={selectStyle}
            />

    </div>


    <div className="">

   <Label title="Select Level" is_reqired={true} />
          <Select
                value={animal}
                onChange={handleChange}
                options={options}
    
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="--Select--"
                classNames={selectStyle}
            />

    </div>

</div>


            <div className="my-4">
                <label htmlFor="students" className="block text-sm font-bold text-gray-700 mb-2">Select Students:</label>

      

          <Select
                value={animal}
                onChange={handleChange}
                options={options}
                isMultiple
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="--Select--"
                classNames={selectStyle}
            />
            </div>




 <h2 className="text-blue-700 text-xl font-semibold mb-5 border-b border-gray-200 pb-3">Select Courses</h2>


            <div className="mb-6">


                <label htmlFor="semester" className="block text-sm font-bold text-gray-700 mb-2">Semester:</label>


                <Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="--Select Semester--"
                classNames={selectStyle}
            />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             
                <div className="course-section">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Available Courses</h3>
                    <div className="max-h-80 overflow-y-auto pr-2">
                        


                 <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">General Courses</h4>
                            <div className="course-item flex items-center p-3 border border-gray-200 rounded-md mb-2 hover:bg-gray-50">
                                <input type="checkbox" id="course1" value="3" data-course="GST101"  checked />
                                <label htmlFor="course1" className="flex-1 text-sm text-gray-700 ml-2">Use of English (GST101)</label>
                                <span className="text-sm text-gray-500">3 Credits</span>
                            </div>
                            <div className="course-item flex items-center p-3 border border-gray-200 rounded-md mb-2 hover:bg-gray-50">
                                <input type="checkbox" id="course2" value="3" data-course="GST102" />
                                <label htmlFor="course2" className="flex-1 text-sm text-gray-700 ml-2">Nigerian Peoples and Culture (GST102)</label>
                                <span className="text-sm text-gray-500">3 Credits</span>
                            </div>
                        </div>
              
                        <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Failed Courses</h4>
                            <div className="course-item flex items-center p-3 border border-gray-200 rounded-md mb-2 hover:bg-gray-50">
                                <input type="checkbox" id="course3" value="3" data-course="MAT101"  checked />
                                <label htmlFor="course3" className="flex-1 text-sm text-gray-700 ml-2">Calculus I (MAT101)</label>
                                <span className="text-sm text-gray-500">3 Credits</span>
                            </div>
                            <div className="course-item flex items-center p-3 border border-gray-200 rounded-md mb-2 hover:bg-gray-50">
                                <input type="checkbox" id="course4" value="3" data-course="PHY101" />
                                <label htmlFor="course4" className="flex-1 text-sm text-gray-700 ml-2">Physics I (PHY101)</label>
                                <span className="text-sm text-gray-500">3 Credits</span>
                            </div>
                        </div>
                     
                        <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Semester Courses</h4>
                            <div className="course-item flex items-center p-3 border border-gray-200 rounded-md mb-2 hover:bg-gray-50">
                                <input type="checkbox" id="course5" value="4" data-course="MAT201" />
                                <label htmlFor="course5" className="flex-1 text-sm text-gray-700 ml-2">Calculus II (MAT201)</label>
                                <span className="text-sm text-gray-500">4 Credits</span>
                            </div>
                        </div>
                    </div>
                </div>

  
                <div className="course-section">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Selected Courses</h3>
                    <div id="selectedCourses" className="max-h-80 overflow-y-auto pr-2">
                    



                      <div className="course-item flex items-center p-3 border border-gray-200 rounded-md mb-2 bg-blue-50" data-course="MAT101">
                            <span className="flex-1 text-sm text-gray-700">Calculus I (MAT101)</span>
                            <span className="text-sm text-gray-500">3 Credits</span>

                            <Button size={'sm'} className='ml-2' variant={'destructive'}><Trash/></Button>
                        
                        </div>


                      <div className="course-item flex items-center p-3 border border-gray-200 rounded-md mb-2 bg-blue-50" data-course="MAT101">
                            <span className="flex-1 text-sm text-gray-700">Calculus I (MAT101)</span>
                            <span className="text-sm text-gray-500">3 Credits</span>

                            <Button size={'sm'} className='ml-2' variant={'destructive'}><Trash/></Button>
                        
                        </div>


                    </div>
                    <div className="mt-4 text-sm text-gray-700">
                        Total Credits: <span id="creditTotal" className="font-bold text-blue-600">0</span> / 30
                    </div>
                </div>
            </div>

        </form>







  </CardContent>
</Card>

</div>


<div className="flex justify-between items-center bg-white border-t-2 border-t-color-border px-20 py-5 bottom-0 sticky w-full  ">

    <h2 className="text-base font-medium">Unsaved Changes</h2>

    <div className="flex gap-3">
    <Button variant={'white'} size='md' className="">Discard</Button>

    <Button variant={'primary'} size='md' className="">Register Courses</Button>
    </div>
</div>

    </Template>
  )
}

export default CourseRegistration
