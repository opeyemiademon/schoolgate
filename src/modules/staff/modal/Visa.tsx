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

export const VisaModal =(props:any)=> {

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
    
          <Button variant={'white'} size={'sm'} >Add Document</Button>
      </DialogTrigger>
      <DialogContent className=" p-0 min-w-[80%]  ">
        <DialogHeader className="p-4 border-b border-color-border">
          <DialogTitle >Add Document</DialogTitle>
        </DialogHeader>


        <div className="py-2 px-5">

<div className="grid grid-cols-3 gap-4 mt-2">


<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 ">  Document Type <span className='text-red-800'>*</span></label>
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
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Document Number </label>

<Input type="text" className="mt-2" />
</div>



<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Issuing Authority</label>

<Input type="text" className="mt-2" />
</div>

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Issued Date</label>

<Input type="date" className="mt-2" />
</div>


<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Expirty Date</label>

<Input type="date" className="mt-2" />
</div>

<div className="">
<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 "> Renew Date</label>

<Input type="date" className="mt-2" />
</div>


<div className=" ">

<label htmlFor="" className="form-title text-sm leading-1 text-color-gray-2 ">  Issuing Country <span className='text-red-800'>*</span></label>
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
</div>



</div>



<hr className="mt-5 text-color-border " />

        <div className="p-4 flex items-center justify-end gap-3">
         
          <Button variant={'white'} size={'md'} className=" ">Cancel</Button>

          <Button variant={'primary'} size={'md'} className=" ">Save Document</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
