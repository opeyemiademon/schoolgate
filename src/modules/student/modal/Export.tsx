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

export const ExportStudent =(props:any)=> {

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
      <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer">Export</a>
      
      </DialogTrigger>
      <DialogContent className=" p-0 min-w-[50%]  ">
        <DialogHeader className="p-4 border-b border-color-border">
          <DialogTitle >Export</DialogTitle>
        </DialogHeader>


         <div className=" py-1 px-5 flex flex-col mt-2">
            
            <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select  Excel/CSV File  <span className='text-red-800'>*</span></label>
            
            <div className='mt-5'>
            <Button variant={'white'} size={'lg'} className='w-full'>Browse</Button>
            </div>
            </div>



            <div className=" py-1 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Faculty <span className='text-red-800'>*</span></label>
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

<div className=" py-1 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Department <span className='text-red-800'>*</span></label>
<Select
                value={animal}
                onChange={handleChange}
                options={options}
                primaryColor={"indigo"}
                isSearchable={true}
                isClearable={true}
                placeholder="Select faculty first"
                classNames={selectStyle}
            />
</div>


<hr className="mt-5 text-color-border " />

        <div className="p-4 flex items-center justify-end gap-3">
         
          <Button variant={'white'} size={'md'} className=" ">Cancel</Button>

          <Button variant={'white'} size={'md'} className=" ">Next</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
