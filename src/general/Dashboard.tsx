


import { FaAngleLeft, FaArrowDown, FaCaretDown, FaChartBar, FaCheck, FaCog, FaCogs, FaDatabase, FaEllipsisV, FaFile, FaFilePdf, FaPen, FaPlusCircle, FaPrint, FaQuestionCircle, FaReact, FaSearch, FaShare, FaSortAlphaDown, FaSortAlphaUp, FaSortAlphaUpAlt, FaSortDown, FaSortNumericDown, FaTrash, FaUpload } from "react-icons/fa"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowBigDown, ArrowDown, Menu, Search, SearchX } from "lucide-react"
import { HiOutlineChat, HiOutlineChevronDown, HiOutlineChevronRight } from "react-icons/hi"
import { FaCircleQuestion, FaPencil, FaPlugCirclePlus } from "react-icons/fa6"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const Dashboard = () => {
  return (
   <>
   <div className="fixed top-0 px-2 py-2 border-b w-full z-50 border-b-[#D8D9DA] bg-white"> 

<div className="flex justify-between items-center">



<div className="flex items-center">

<FaDatabase className="text-2xl text-color-primary ml-1"/>

</div>



<div className="flex items-center gap-2">


<Button variant={'orange'} size='sm' className="text-sm">9 days left</Button>

<div className="flex gap-2 items-center">
    <img src="/images/ope.png" alt="logo" className="w-10 h-10 rounded-full" />
    <span className="text-sm font-semibold">Eminent Ade</span>
    <HiOutlineChat className="text-lg"/>
</div>
</div>


</div>
    </div>
   



    <div className="flex mt-14 z-40 w-screen">
    <div className="flex flex-row">
<div className=" fixed min-h-[calc(100vh-56px)] bg-white ">

<div className="h-[calc(100vh-60px)]">
    <ul className="border-r h-full overflow-scroll border-r-[#D8D9DA] ">


        <li className="border-b border-b-[#D8D9DA] p-3"><Link to='#'><Menu className="text-2xl text-color-primary"/></Link></li>


        <li className="border-b cursor-pointer border-b-[#D8D9DA] p-3 group"><Link to='#'><FaFilePdf className="text-2xl text-color-border group-hover:text-color-primary "  /></Link></li>
        <li className="border-b cursor-pointer border-b-[#D8D9DA] p-3 group"><Link to='#'><FaCog className="text-2xl text-color-border group-hover:text-color-primary " /></Link></li>
       
      


        <li className=" cursor-pointer bottom-0 absolute"><a href="#"><FaCircleQuestion className="text-5xl text-color-primary " /></a></li>

    </ul>

    </div>
</div>


</div>

<main className={`  min-h-[calc(100vh-56px)]  ml-14  w-full `}>



<div className="px-14 py-4">


<div className="flex items-center justify-between">

    <h2 className="text-2xl font-medium">My Apps</h2>


    <div className="flex gap-3">

    <Button variant={'outline-primary'} size={'md'}> <FaQuestionCircle/> Help</Button>

    <Button variant={'outline-primary'} size={'md'}> <FaChartBar/> Stats</Button>


    <Button variant={'white'} size={'md'}> <FaPlusCircle/> Create Folder</Button>
        <Button variant={'primary'} size={'md'}> <FaPlusCircle/> Create a New App</Button>
    </div>
</div>





<div className="py-4">

<Card className="p-4">
  <CardContent className="p-0 ">
    
 
<div className="flex gap-2">

<div className="form-group-wrapper">

<div className="flex border items-center border-color-border p-2 rounded-l-md w-full border-r-0 group">
<Search className="text-color-gray-2"/>
<input type="text" className="form-group" placeholder="Search..." />
</div>

<Button variant={'white'} size={'md'} className="rounded-r-md rounded-l-none"><FaSearch/> </Button>
</div>

<div className="relative group">
<Button variant={'white'} size={'md'} className="group">Date Created DESC <FaCaretDown/> </Button>


<div className="bg-white border border-color-border  rounded-md shadow-md absolute mt-2 w-[250px] -left-10 hidden group-hover:block ">

<ul className="flex flex-col">
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer"> <FaSortAlphaUpAlt/> Date Created DESC <FaCheck className="text-color-success text-xs" /> </li>
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer"> <FaSortNumericDown/>  Date Created ASC</li>
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer"><FaSortAlphaDown/> App Name DESC</li>
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer"> <FaSortAlphaUp/>App Name ASC</li>
</ul>
</div>

</div>




</div>



  </CardContent>
</Card>
</div>


<div className="flex justify-between items-center group cursor-pointer gap-2 my-4">
    <HiOutlineChevronDown className="text-xl font-semibold"/>
    <div className="w-1/7">
<h2 className="text-base font-semibold   ">App Folder (1) </h2>
</div>
<hr className="w-full border-1 border-color-border group-hover:border-black  "/>
</div>





<div className="my-8 grid grid-cols-1 md:grid-cols-3  gap-3">

<Card className="p-4  hover:border hover:border-black cursor-pointer">
  <CardContent className="p-3 ">

<div className="flex items-center justify-between">

<div className="flex items-center gap-3">

<div className="bg-gray-300 h-12 w-12 rounded-md items-center justify-center flex">
    <FaFile className="text-2xl text-gray-600" />
</div>

<div>
<h3 className="font-semibold text-xl">Admin</h3>
<span className="text-base">0 Apps</span>
</div>
</div>


<div className="relative group h-12 w-6 hover:bg-gray-300 rounded-md items-center flex justify-center">
<FaEllipsisV />


<div className="bg-white border border-color-border  rounded-md shadow-md absolute mt-2 w-[200px] group-hover:block top-8 -right-1 hidden">

<ul className="flex flex-col">
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer rounded-t-md"> <FaPencil/> Edit  </li>
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer rounded-b-md"> <FaTrash/>  Delete</li>
   
</ul>
</div>

</div>
</div>

  </CardContent>
  </Card>



  <Card className="p-4  hover:border hover:border-black cursor-pointer">
  <CardContent className="p-3 ">

<div className="flex items-center justify-between">

<div className="flex items-center gap-3">

<div className="bg-gray-300 h-12 w-12 rounded-md items-center justify-center flex">
    <FaFile className="text-2xl text-gray-600" />
</div>

<div>
<h3 className="font-semibold text-xl">Admin</h3>
<span className="text-base">0 Apps</span>
</div>
</div>


<div className="relative group h-12 w-6 hover:bg-gray-300 rounded-md items-center flex justify-center">
<FaEllipsisV />


<div className="bg-white border border-color-border  rounded-md shadow-md absolute mt-2 w-[200px] group-hover:block top-8 -right-1 hidden">

<ul className="flex flex-col">
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer rounded-t-md"> <FaPencil/> Edit  </li>
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer rounded-b-md"> <FaTrash/>  Delete</li>
   
</ul>
</div>

</div>
</div>

  </CardContent>
  </Card>
  </div>




  <div className="flex justify-between items-center group cursor-pointer gap-2 my-8">
    <HiOutlineChevronDown className="text-xl font-semibold"/>
    <div className="w-1/7">
<h2 className="text-base font-semibold   ">Apps (4) </h2>
</div>
<hr className="w-full border-1 border-color-border group-hover:border-black  "/>
</div>







<div className="my-8 grid grid-cols-1 md:grid-cols-3  gap-4">

<Card className="p-4  hover:border hover:border-black cursor-pointer">
  <CardContent className="px-3 ">



<div className="flex flex-col">

<div className="flex items-center justify-between">
<h3 className="font-medium text-color-dark text-lg">Student Portal Template</h3>

<div className="flex items-center">
<FaShare className="text-color-dark"/>
<div className="relative group h-12 w-6 hover:bg-gray-300 rounded-md items-center flex justify-center">
<FaEllipsisV />


<div className="bg-white border border-color-border  rounded-md shadow-md absolute mt-2 w-[200px] group-hover:block top-8 -right-1 hidden">

<ul className="flex flex-col">
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer rounded-t-md"> <FaPencil/> Edit  </li>
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer "> <FaTrash/>  Move to Folder</li>
   
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer "> <FaTrash/>  Copy App</li>


    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer "> <FaTrash/>  App Settings</li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer rounded-b-md"> <FaTrash/>  Delete App</li>
</ul>
</div>

</div>
</div>

</div>

<div className="w-full h-56 bg-gray-300 rounded-md"> </div>


<span className="italic text-xs my-2">Student can view assignments, grades, courses and ...</span>


<div className="flex items-center justify-between">
    <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer">Add Domain</a>
   
   <div className="flex items-center gap-3">
    <FaUpload className="text-color-gray-2 hover:text-color-dark cursor-pointer" />
    <FaPen className="text-color-gray-2 hover:text-color-dark cursor-pointer" />
    </div>
</div>
</div>

  </CardContent>
  </Card>



  <Card className="p-4  hover:border hover:border-black cursor-pointer">
  <CardContent className="px-3 ">



<div className="flex flex-col">

<div className="flex items-center justify-between">
<h3 className="font-medium text-color-dark text-lg">Student Portal Template</h3>

<div className="flex items-center">
<FaShare className="text-color-dark"/>
<div className="relative group h-12 w-6 hover:bg-gray-300 rounded-md items-center flex justify-center">
<FaEllipsisV />


<div className="bg-white border border-color-border  rounded-md shadow-md absolute mt-2 w-[200px] group-hover:block top-8 -right-1 hidden">

<ul className="flex flex-col">
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer rounded-t-md"> <FaPencil/> Edit  </li>
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer "> <FaTrash/>  Move to Folder</li>
   
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer "> <FaTrash/>  Copy App</li>


    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer "> <FaTrash/>  App Settings</li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer rounded-b-md"> <FaTrash/>  Delete App</li>
</ul>
</div>

</div>
</div>

</div>

<div className="w-full h-56 bg-gray-300 rounded-md"> </div>


<span className="italic text-xs my-2">Student can view assignments, grades, courses and ...</span>


<div className="flex items-center justify-between">
    <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer">Add Domain</a>
   
   <div className="flex items-center gap-3">
    <FaUpload className="text-color-gray-2 hover:text-color-dark cursor-pointer" />
    <FaPen className="text-color-gray-2 hover:text-color-dark cursor-pointer" />
    </div>
</div>
</div>

  </CardContent>
  </Card>



  <Card className="p-4  hover:border hover:border-black cursor-pointer">
  <CardContent className="px-3 ">



<div className="flex flex-col">

<div className="flex items-center justify-between">
<h3 className="font-medium text-color-dark text-lg">Student Portal Template</h3>

<div className="flex items-center">
<FaShare className="text-color-dark"/>
<div className="relative group h-12 w-6 hover:bg-gray-300 rounded-md items-center flex justify-center">
<FaEllipsisV />


<div className="bg-white border border-color-border  rounded-md shadow-md absolute mt-2 w-[200px] group-hover:block top-8 -right-1 hidden">

<ul className="flex flex-col">
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer rounded-t-md"> <FaPencil/> Edit  </li>
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer "> <FaTrash/>  Move to Folder</li>
   
    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer "> <FaTrash/>  Copy App</li>


    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer "> <FaTrash/>  App Settings</li>

    <li className="flex items-center gap-2 text-color-gray-2 px-4 py-2 hover:bg-color-primary-light cursor-pointer rounded-b-md"> <FaTrash/>  Delete App</li>
</ul>
</div>

</div>
</div>

</div>

<div className="w-full h-56 bg-gray-300 rounded-md"> </div>


<span className="italic text-xs my-2">Student can view assignments, grades, courses and ...</span>


<div className="flex items-center justify-between">
    <a href="#" className="text-sm hover:bg-color-primary-light hover:text-color-primary p-2 rounded-sm cursor-pointer">Add Domain</a>
   
   <div className="flex items-center gap-3">
    <FaUpload className="text-color-gray-2 hover:text-color-dark cursor-pointer" />
    <FaPen className="text-color-gray-2 hover:text-color-dark cursor-pointer" />
    </div>
</div>
</div>

  </CardContent>
  </Card>
</div>






</div>


</main>

</div>
   
   </>
  )
}

export default Dashboard
