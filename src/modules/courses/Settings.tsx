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
import { AddCourseType } from "./AddCourseType"
import Label from "@/components/Label"

const CourseSettings = () => {
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

<>



<div className="px-6 py-4 ">

<Card className="p-0   ">
  <CardContent className="p-0">
    
<div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-4 flex  flex-col gap-2'>
 
 <h5 className='text-base font-semibold leading-4'>Course Registration Settings</h5>
<span className='text-sm italic'>Configure settings for student course registration.</span>
</div>

   
<div className="flex flex-col items-center justify-center py-2 px-5 ">


<div className="w-1/2 mt-5">
  <Label title='Active Semester' />

<Select
                value={animal}
                onChange={handleChange}
                options={[
                  {label:"First Semester 2025", value:""},
                  {label:"Second Semester 2025", value:""},
                  {label:"Third Semester 2025", value:""},
    
                ]}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select "
                classNames={selectStyle}
            />


</div>


<div className="w-1/2 mt-5">

 <h3 className="text-lg text-blue-700 font-semibold  mb-3 border-b pb-2 border-color-border">Course Registration Window</h3>



 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                    <div>
                        <label htmlFor="regStartDate" className="block text-sm font-bold text-gray-700 mb-2">Registration Start Date:</label>
                        <input type="date" id="regStartDate" name="regStartDate" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="regEndDate" className="block text-sm font-bold text-gray-700 mb-2">Registration End Date:</label>
                        <input type="date" id="regEndDate" name="regEndDate" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" required />
                    </div>

                    </div>
</div>

<div className="w-1/2 mt-5">
  <Label title='Course Registration Approval Mode' />

<Select
                value={animal}
                onChange={handleChange}
                options={[
                  {label:"Manually Approve   (By Coordinator / Admin)", value:""},
                  {label:"Automatic Approval   (Approve instantly upon registration submission)", value:""},
    
                ]}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select "
                classNames={selectStyle}
            />


</div>


<div className="w-1/2 mt-5">
  <Label title='Allow Course Selection from Other Levels for Registration' />

<Select
                value={animal}
                onChange={handleChange}
                options={[
                  {label:"No", value:""},
                  {label:"Yes", value:""},
    
                ]}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select "
                classNames={selectStyle}
            />


</div>






<div className="w-1/2 mt-5">


  <div className="mb-6">
                <h3 className="text-lg text-blue-700 font-semibold  mb-3 border-b pb-2 border-color-border">Credit Limits</h3>

                <div className="mb-4">
                    <label htmlFor="maxCredits" className="block text-sm font-bold text-gray-700 mb-2">Minimum Credits per Semester:</label>

                    <Input type="number" value={15}/> 
                </div>

                <div className="mb-4">
                    <label htmlFor="maxCredits" className="block text-sm font-bold text-gray-700 mb-2">Maximum Credits per Semester:</label>

                    <Input type="number" value={30}/> 
                </div>
            </div>




</div>




<div className="w-1/2 mt-5">

<h3 className="text-lg font-semibold text-blue-700 mb-3 border-b pb-2 border-color-border">Fees and Debtor Settings</h3>

    <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Allow Fees Debtors to Register:</label>
                    <div className="flex items-center gap-4">
                        <label className="flex items-center">
                            <input type="radio" name="allowDebtors" value="yes" className="text-blue-600 focus:ring-blue-500" />
                            <span className="ml-2 text-sm text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="allowDebtors" value="no" className="text-blue-600 focus:ring-blue-500" checked />
                            <span className="ml-2 text-sm text-gray-700">No</span>
                        </label>
                    </div>
                </div>

                
  <Label title='Allow Fees debtors who have paid up to' />

<div className="flex items-center border justify-between rounded-md h-10 border-color-border px-4">
<input className="h-full  ring-0 focus:ring-0 outline-none focus:ouline-none text-sm text-gray-700 " type="number" max={100} maxLength={3}/>

<span className="text-sm text-gray-700">% of all their invoices</span>
</div>



            



</div>



<div className="w-1/2 mt-5">
  <Label title='Course Registration General Access Fee' /><br/>

<Input value={0} type="number"/>
<span className="text-xs italic text-gray-700">(each student should pay this fee to be able to register)
</span>

</div>


<div className="w-1/2 mt-5">
  <Label title='Late Course Registration Fee' /><br/>

<Input value={0} type="number"/>
<span className="text-xs italic text-gray-700">(payable when a student failed to register when the registration window was open)
</span>

</div>


<div className="w-1/2 mt-5">
  <Label title='Course Registration Add and Drop Fee' /><br/>

<Input value={0} type="number"/>
<span className="text-xs italic text-gray-700">(payable when a student's submitted registrations have been approved but the student wants to make changes)
</span>

</div>

</div>





  </CardContent>
</Card>
<hr className="mt-5 text-color-border " />
</div>




</>

  )
}

export default CourseSettings
