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

export const ModalEdit =(props:any)=> {
  return (
    <Dialog>
      <DialogTrigger asChild>
      {props.visible?<div className="flex items-center justify-center bg-blue-500 rounded-sm p-1 hover:bg-blue-500/80 cursor-pointer ">
        <FaExpandAlt className="text-white text-sm" />
        </div>:[]}
      
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0">
        <DialogHeader className="p-3 border-b border-color-border">
          <DialogTitle >Edit Student Name</DialogTitle>
        </DialogHeader>
        <div className="py-2 px-5">
          <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="px-5 "
            />
          
          <Button variant={'primary'} className="w-full my-2">Update</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
