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

const AdmissionPattern = () => {
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
 
 <h5 className='text-base font-semibold leading-4'>Student ID Pattern Configuration</h5>
<span className='text-sm italic'>Define and manage the generation patterns for student identification numbers.</span>
</div>

   

<div className=" py-4 px-5 flex gap-2 w-full">


    





    </div>




  </CardContent>
</Card>
<hr className="mt-5 text-color-border " />
</div>




</>

  )
}

export default AdmissionPattern
