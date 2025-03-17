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

export const ImportStudent =(props:any)=> {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary py-3 px-4 rounded-sm cursor-pointer">Import</a>
      
      </DialogTrigger>
      <DialogContent className=" p-0 min-w-[90%]  ">
        <DialogHeader className="p-4 border-b border-color-border">
          <DialogTitle >Import New Record</DialogTitle>
        </DialogHeader>


         <div className=" py-2 px-5 flex flex-col mt-2">
            
            <label htmlFor="" className="form-title text-base leading-1 text-color-gray-2 "> Select  Excel/CSV File  <span className='text-red-800'>*</span></label>
            
            <div className='mt-5'>
            <Button variant={'white'} size={'lg'} className='w-full'>Browse</Button>
            </div>
            </div>

        <div className="py-2 px-5">
          <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="px-5 "
            />
          
          <Button variant={'primary'} className=" my-2">Update</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
