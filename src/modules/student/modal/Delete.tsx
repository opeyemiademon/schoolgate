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
import { FaExpandAlt, FaShare, FaTrashAlt } from "react-icons/fa"

import { selectStyle } from '@/components/GlobalFunction'
import Select from 'react-tailwindcss-select'

export const DeleteStudent =(props:any)=> {

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
      <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer"><FaTrashAlt/></a>
      
      </DialogTrigger>
      <DialogContent className=" p-0 min-w-[80%]  ">
        <DialogHeader className="p-4 border-b border-color-border">
          <DialogTitle >Delete Records</DialogTitle>
        </DialogHeader>


         <div className=" py-1 px-5 border rounded-md border-border mt-2">
            
            

            


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
