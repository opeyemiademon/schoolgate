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
import { Checkbox } from "@/components/ui/checkbox"

const AdmissionPattern = () => {
  const [animal, setAnimal] = useState(null);
const [Modal, setModal]= useState({
  field:false,
  height:false,
  filter:false,
  sort:false
})


const patthern = [
  { value: "fox", label: "Default: UNI/DEP/YEAR/SEQ" },
  { value: "Butterfly", label: "Faculty-Based: FT_YEAR_DEP_SEQ" },
  { value: "Honeybees", label: "Detailed: UNI/FAC/DEP/SEQ/ADM_YEAR/GRAD_YEAR" },
  { value: "Honeybeess", label: "Custom Pattern" }

];

const handleChange = (value:any) => {
  console.log("value:", value);
  setAnimal(value);
};

  return (

<>



<div className="px-6 py-4 ">

<Card className="p-0   ">
  <CardContent className="p-0">
    
 <div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex  flex-col gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Student ID Pattern Configuration</h5>
<span className='text-sm italic'>Define and manage the generation patterns for student identification numbers.</span>
</div>

   

<div className=" p-4">


    


    <div className="section mb-10">
            <h2 className="text-blue-700 text-xl font-semibold mb-5 border-b border-gray-200 pb-3">Current Active Pattern</h2>
            <div className="form-group mb-4 flex items-center flex-wrap">
               
                <label htmlFor="activePattern" className="block mb-1 font-bold w-48 flex-shrink-0 pr-4 box-border">Select Active Pattern:</label>

                <Select
                value={animal}
                onChange={handleChange}
                options={patthern}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                isMultiple={true}
                placeholder="Select faculty first"
                classNames={selectStyle}
            />

            </div>
            <div className="id-preview bg-blue-50 border border-blue-200 border-l-4 border-l-blue-500 p-4 rounded-md mt-5 text-center">
                <p className="m-0 text-xl font-bold text-blue-700 break-all"><strong>Preview:</strong> UNI/CS/2024/0001</p>
            </div>
        </div>


 <div className="section mb-10">
            <h2 className="text-blue-700 text-xl font-semibold mb-5 border-b border-gray-200 pb-3">Configure Custom Pattern</h2>

            <div className="form-group mb-4 flex items-center flex-wrap">
                <label htmlFor="patternName" className="block mb-1 font-bold w-48 flex-shrink-0 pr-4 box-border">Pattern Name:</label>
                
                <Input placeholder="e.g., Standard UG ID, FT ID" />
                
            </div>
            <div className="form-group inline-fields flex items-center gap-x-4 gap-y-2 flex-wrap mb-4">
                <label htmlFor="defaultDelimiter" className="w-auto block mb-1 font-bold pr-4 box-border">Default Delimiter:</label>


                 <Input placeholder="e.g., / or - or empty" value="/" className="w-auto" />


                <label htmlFor="sequenceLength" className="w-auto block mb-1 font-bold pr-4 box-border">Sequence Length:</label>

                   <Input placeholder="e.g., / or - or empty" className="w-auto py-2 px-3" type="number" value="4" min="1" max="10" />

                
                <label htmlFor="leadingZeros" className="w-auto block mb-1 font-bold pr-4 box-border">Leading Zeros:</label>
                <Checkbox checked />
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">Pattern Components Order:</h3>

            <div className="pattern-component-list border border-gray-300 rounded-md p-4 bg-gray-50" id="patternComponents">
                <div className="pattern-component-item flex items-center justify-between bg-white border border-gray-200 p-3 mb-2 rounded-md shadow-sm">
                    <span className="font-semibold text-blue-600">University Code (UNI)</span>

                    <Button variant={'destructive'} size={'sm'} className="transition-colors duration-300 hover:bg-red-600 bg-red-500">Remove</Button>
                </div>


                <div className="pattern-component-item flex items-center justify-between bg-white border border-gray-200 p-3 mb-2 rounded-md shadow-sm">
                    <span className="font-semibold text-blue-600">Department Code (CS)</span>
                       <Button variant={'destructive'} size={'sm'} className="transition-colors duration-300 hover:bg-red-600 bg-red-500">Remove</Button>
                </div>


                <div className="pattern-component-item flex items-center justify-between bg-white border border-gray-200 p-3 mb-2 rounded-md shadow-sm">
                    <span className="font-semibold text-blue-600">Admission Year (YYYY)</span>
                    <Button variant={'destructive'} size={'sm'} className="transition-colors duration-300 hover:bg-red-600 bg-red-500">Remove</Button>
                </div>


                <div className="pattern-component-item flex items-center justify-between bg-white border border-gray-200 p-3 rounded-md shadow-sm">
                    <span className="font-semibold text-blue-600">Sequence Number (0001)</span>
                      <Button variant={'destructive'} size={'sm'} className="transition-colors duration-300 hover:bg-red-600 bg-red-500">Remove</Button>
                </div>
            </div>

            <div className="add-component-form flex gap-4 mt-5 flex-wrap">
                <select id="componentType" className="flex-1 py-2 px-3 border border-gray-300 rounded-md text-base min-w-[120px] box-border">
                    <option value="">-- Add Component --</option>
                    <option value="university_code">University Code</option>
                    <option value="faculty_code">Faculty Code</option>
                    <option value="department_code">Department Code</option>
                    <option value="admission_year_full">Admission Year (YYYY)</option>
                    <option value="admission_year_short">Admission Year (YY)</option>
                    <option value="graduation_year_full">Graduation Year (YYYY)</option>
                    <option value="graduation_year_short">Graduation Year (YY)</option>
                    <option value="sequence_number">Sequence Number</option>
                    <option value="custom_text">Custom Text</option>
                </select>

           

                <Input placeholder="Custom text (if applicable)" className="min-w-[120px] flex-1" />
               
               <Button variant={'success'} size={'sm'}>Add Component</Button>
               
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

    <Button variant={'primary'} size='md' className="">Save Pattern</Button>
    </div>
</div>

</>

  )
}

export default AdmissionPattern
