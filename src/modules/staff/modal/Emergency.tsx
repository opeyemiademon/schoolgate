import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { FaExpandAlt, FaShare } from "react-icons/fa"

import { selectStyle } from '@/components/GlobalFunction'
import Select from 'react-tailwindcss-select'

export const EmergencyModal =(props:any)=> {

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
    <Dialog>
      <DialogTrigger asChild>
    
          <Button variant={'white'} size={'sm'} >Add Contact</Button>
      </DialogTrigger>
      <DialogContent className=" p-0 min-w-[60%]  ">
        <DialogHeader className="p-4 border-b border-color-border">
          <DialogTitle >Assigned Emergency Contacts</DialogTitle>
        </DialogHeader>


        <div className="py-2 px-5">

<div className="grid grid-cols-2 gap-4 mt-2">


<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Fullname </label>

<Input type="text" className="mt-2" />
</div>



<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Relationship</label>

<Input type="text" className="mt-2" />
</div>

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Mobile</label>

<Input type="text" className="mt-2" />
</div>


<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Email Address</label>

<Input type="text" className="mt-2" />
</div>

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Home Telephone</label>

<Input type="text" className="mt-2" />
</div>
</div>



</div>



<hr className="mt-5 text-color-border " />

        <div className="p-4 flex items-center justify-end gap-3">
         
          <Button variant={'white'} size={'md'} className=" ">Cancel</Button>

          <Button variant={'primary'} size={'md'} className=" ">Save Contact</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
