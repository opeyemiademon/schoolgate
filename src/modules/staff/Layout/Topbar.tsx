
import { FaAngleDown, FaCogs, FaDatabase, FaEye } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { HiOutlineChat, HiOutlineChevronRight } from "react-icons/hi"
const Topbar = () => {
  return (
   <>
   
   <div className="fixed top-0 px-2 py-2 border-b w-full z-50 border-b-[#D8D9DA] bg-white"> 

<div className="flex justify-between items-center">



<div className="flex items-center">


<FaDatabase className="text-2xl text-color-primary ml-1"/>

<ul className="px-4 flex items-center">




<li className="flex items-center">
    <a href="" className="flex items-center hover:text-color-primary group">
<FaDatabase className="text-lg group-hover:text-color-primary"/>
<span className="text-sm ml-2"> Student Po... </span>
</a>
<HiOutlineChevronRight className="text-3xl"/>
</li>


<li className="flex items-center">
    <a href="" className="flex items-center hover:text-color-primary group">
<FaCogs className="text-lg group-hover:text-color-primary"/>
<span className="text-sm ml-2"> Settings </span>
</a>
<HiOutlineChevronRight className="text-3xl"/>
</li>

</ul>
</div>
<div>

<div className="flex items-center justify-between  w-[300px] border rounded-md border-color-border py-2 px-3 cursor-pointer hover:bg-gray-100">
    <div className="flex items-center">
<Search className="h-4"/>
<span className="text-sm ml-1">Search...</span>
</div>


<span className="text-sm">Ctrl + K</span>
</div>

</div>


<div className="flex items-center gap-2">
<Button variant={'white'} size='sm' className=""><FaAngleDown/></Button>

<Button variant={'orange'} size='sm' className="text-sm">12 days left</Button>

<Button variant={'success'} size='sm' ><FaEye/> View App</Button>

<div className="flex gap-2 items-center">
    <img src="/images/ope.png" alt="logo" className="w-10 h-10 rounded-full" />
    <span className="text-sm font-semibold">Eminent Ade</span>
    <HiOutlineChat className="text-lg"/>
</div>
</div>


</div>
    </div>
   </>
  )
}

export default Topbar
