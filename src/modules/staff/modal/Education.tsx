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

export const EducationModal =(props:any)=> {

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
    
          <Button variant={'white'} size={'sm'} >Add Qualification</Button>
      </DialogTrigger>
      <DialogContent className=" p-0 min-w-[60%]  ">
        <DialogHeader className="p-4 border-b border-color-border">
          <DialogTitle >Add Qualification</DialogTitle>
        </DialogHeader>


        <div className="py-2 px-5">

<div className="grid grid-cols-2 gap-4 mt-2">


<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 ">  Certificate <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select.."
                classNames={selectStyle}
            />
</div>


<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Institution </label>

<Input type="text" className="mt-2" />
</div>



<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Grade <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select.."
                classNames={selectStyle}
            />
</div>

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Year Start</label>

<Input type="date" className="mt-2" />
</div>


<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Year End</label>

<Input type="date" className="mt-2" />
</div>




</div>



</div>



<hr className="mt-5 text-color-border " />

        <div className="p-4 flex items-center justify-end gap-3">
         
          <Button variant={'white'} size={'md'} className=" ">Cancel</Button>

          <Button variant={'primary'} size={'md'} className=" ">Save Certificate</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
