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
import { ModalEdit } from './Modal'
import Basic from './profile/Basic'
import Contact from './profile/Contact'
import Academic from './profile/Academic'
import Parent from './profile/Parent'
import Qualification from './profile/Qualification'
import File from './profile/File'
import Sibling from './profile/Sibling'

const EditStudent = () => {

  const [step, setStep]= useState(1)
  const [list, setList]= useState([

    "Basic Details",
    "Contact Details",
    "Academic Details",
    "Parent Details",
    "Qualifications",
    "Sibling Records",
    "Files"
  ])



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
    

    <div className="border-b flex justify-between items-center border-color-border w-full  bg-white">

  

    <div className='flex items-center gap-5 '>

    <Link to='/student' className=' border-r border-color-border cursor-pointer flex items-center py-4 px-4 hover:bg-gray-100'><FaChevronLeft /> </Link>

<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaEdit/>Edit Student Record</h2>
</div>


 <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><RefreshCcw/></a> 
</div>

<div className="px-6  border-b border-color-border bg-white">
    <ul className="flex items-center gap-4 tab">

      {list.map((item:any, id:number)=><li key={id} onClick={()=>setStep(id+1)} className={step===id+1 ?" active ":''}>{item}</li>)}
    </ul>
</div>

<div className="px-14 py-4">
{step===1?
    <Basic/>
    :
step===2?
<Contact/>
:
step===3?
<Academic/>:
step===4?
<Parent/>:
step===5?
<Qualification />:

step===6?
<Sibling />
:
<File/>
}


<hr className="mt-5 text-color-border " />


<Button type='button' variant={'white'} size={'md'} className='mt-3'>Delete</Button>

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

export default EditStudent
