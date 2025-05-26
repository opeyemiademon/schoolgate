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
import { Checkbox } from "@/components/ui/checkbox"

import { selectStyle } from '@/components/GlobalFunction'
import Select from 'react-tailwindcss-select'
import { Textarea } from '@/components/ui/textarea'
import Label from '@/components/Label'

export const AddCourseType =(props:any)=> {

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
     

      <Button variant={'white'} size={'md'} className=" border-r-none rounded-l-none">Add  Type</Button>

      </DialogTrigger>
      <DialogContent className=" p-0 min-w-[50%]  ">
        <DialogHeader className="p-4 border-b border-color-border">
          <DialogTitle >Add Course Type</DialogTitle>
        </DialogHeader>





            <div className=" py-1 px-5">

<Label title="Course Type Name" is_reqired={true} />
<Input />
</div>



<div className=" py-1 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Description</label>

<Textarea cols={5} rows={10}/>
</div>



<div className="py-1 px-5">

  <div className="flex gap-2 group">
    
  <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
           Set for Specific Departments/Levels
      </label>
    </div>



         </div>


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


<div className=" py-1 px-5">

<label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select Level <span className='text-red-800'>*</span></label>
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

          <Button variant={'primary'} size={'md'} className=" ">Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
