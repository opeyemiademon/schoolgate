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
import { ImportStudent } from "./modal/Import"
import { ModalEdit } from "./Modal"
import AdmissionPattern from "./settings/AdmissionPattern"

const SetupStudent = () => {
  const [animal, setAnimal] = useState(null);
const [Modal, setModal]= useState({
  field:false,
  height:false,
  filter:false,
  sort:false
})
 const [step, setStep] = useState(1);
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
<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaGraduationCap className="text-lg"/> Faculty</h2>



<div className="flex gap-1 items-center">
<ImportStudent />

{/* <ExportStudent/> */}

<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer">Export</a>

{/* <DeleteStudent/> */}


<a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><FaShare/></a>


<Link to='/faculty/add' className="rounded-sm   py-2  px-5 bg-color-primary text-white shadow-xs hover:bg-color-primary/80"> Add Faculty</Link>
</div>
</div>



<div className="px-6  border-b border-color-border bg-white">
    <ul className="flex items-center gap-4 tab">
        <li className={step===1?"active":""} onClick={()=>setStep(1)}>Student ID Pattern</li>

        <li className={step===2?"active":""} onClick={()=>setStep(2)}>Admissions</li>
        <li className={step===3?"active":""} onClick={()=>setStep(3)}>Course Type</li>
        <li className={step===4?"active":""}>Rules</li>
        <li className={step===5?"active":""}>Settings</li>
    </ul>
</div>



{step===1?<AdmissionPattern/>:

[]
}








</Template>
  )
}

export default SetupStudent
