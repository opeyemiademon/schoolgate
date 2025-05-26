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
import Emergency from './profile/Emergency'
import Family from './profile/Family'
import Visa from './profile/Visa'
import Education from './profile/Education'
import Experience from './profile/Experience'
import Awards from './profile/Awards'
import Job from './profile/Job'
import ReportLine from './profile/ReportLine'
import Files from './profile/Files'
import BankDetails from './profile/BankDetails'
import Password from './profile/Password'
import Termination from './profile/Termination'

const EditStaff = () => {

  const [step, setStep]= useState(2)
  const [list, setList]= useState([

    "Personal Details",
    "Contact Address",
    "Emergency Contacts",
    "Family Contacts",
    "Passport, Visa & Licences",
    "Education History",
    "Work Experience",
    "Membership & Awards",
    "Job Details",
    "Report Line",
    "Certificates",
    "Bank Account Details",
    "Photos & Password",
    "Terminations"
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

<h2 className="flex  gap-2 items-center font-semibold leading-3"><FaEdit/>Edit Staff Record</h2>
</div>


 <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><RefreshCcw/></a> 
</div>


<div className=' px-14 py-4 gap-5 grid grid-cols-12 '>

<div className='col-span-3'>
  <Card className="p-0 min-h-screen ">
    <CardContent className="p-0">


<div className='bg-color-primary-light  text-color-primary shadow shadow-gray-100 rounded-t-md p-2 flex gap-2'>
  <img src="/images/ope.png" alt="Adeleke Monsoor opeyemi" className='h-12 w-12 rounded-full' />
  <div>
  <h5 className='text-sm font-semibold leading-4'>Adeleke Mansoor Opeyemi</h5>
  <span className='text-sm italic'>Senior Lecturer</span>
  </div>
</div>


<ul className='stepper'>

{list.map((item:any, id:number)=><li key={id} onClick={()=>setStep(id+1)} className={step===id+1 ?"active":' '}>{item}</li>)}

</ul>
    </CardContent>
    </Card>
    </div>

<div className="col-span-9">




{step===1?
    <Basic/>
    :
step===2?
<Contact/>
:
step===3?
<Emergency/>:
step===4?
<Family/>:
step===5?
<Visa />:

step===6?
<Education />:
step===7?
<Experience/>:
step===8?
<Awards/>:
step===9?
<Job/>:
step===10?
<ReportLine/>:
step===11?
<Files/>:
step===12?
<BankDetails/>:
step===13?
<Password/>
:
<Termination/>
}


<hr className="mt-5 text-color-border " />


<Button type='button' variant={'white'} size={'md'} className='mt-3'>Delete</Button>

</div>

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

export default EditStaff
